param(
    [string]$ProjectDir = "c:\proj\projedudei"
)

$ErrorActionPreference = "Stop"

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " BUDOWA NATYWNYCH PAKIETÓW MOBILNYCH PROJEDUDEI" -ForegroundColor Cyan
Write-Host " - Android APK (com.projedudei.app)" -ForegroundColor Cyan
Write-Host " - Android AAB (com.projedudei.app)" -ForegroundColor Cyan
Write-Host " - Apple iOS IPA (com.projedudei.app)" -ForegroundColor Cyan
Write-Host " - Offline ZIP & PWA" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
function Write-Utf8NoBom([string]$path, [string]$content) {
    [System.IO.File]::WriteAllText($path, $content, $utf8NoBom)
}

$nativeDir = Join-Path $ProjectDir "native"
$sourceNative = "C:\proj\koronka-2.0-październik\native"
$outDir = Join-Path $ProjectDir "out"
$downloadsDir = Join-Path $ProjectDir "public\downloads"
$outDownloadsDir = Join-Path $ProjectDir "out\downloads"

if (-not (Test-Path $downloadsDir)) {
    New-Item -ItemType Directory -Force -Path $downloadsDir | Out-Null
}
if (-not (Test-Path $outDownloadsDir)) {
    New-Item -ItemType Directory -Force -Path $outDownloadsDir | Out-Null
}

# 1. Kopiowanie bazy native jeśli nie istnieje
if (-not (Test-Path $nativeDir)) {
    Write-Host "`n[1/6] Inicjalizacja katalogu native/ z bazy Capacitor ..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Force -Path $nativeDir | Out-Null
    
    # Kopiujemy android, scripts, package.json, capacitor.config.json (bez zbędnych starych buildów)
    Copy-Item -Recurse -Force (Join-Path $sourceNative "android") (Join-Path $nativeDir "android")
    Copy-Item -Recurse -Force (Join-Path $sourceNative "scripts") (Join-Path $nativeDir "scripts")
    Copy-Item -Force (Join-Path $sourceNative "package.json") (Join-Path $nativeDir "package.json")
    Copy-Item -Force (Join-Path $sourceNative "capacitor.config.json") (Join-Path $nativeDir "capacitor.config.json")
}

# Połączenie (Junction) do node_modules Capacitor
$nativeNodeModules = Join-Path $nativeDir "node_modules"
if (-not (Test-Path $nativeNodeModules)) {
    Write-Host "Tworzenie junction do node_modules Capacitor ..." -ForegroundColor Yellow
    $sourceModules = Join-Path $sourceNative "node_modules"
    New-Item -ItemType Junction -Path $nativeNodeModules -Target $sourceModules | Out-Null
}

# 2. Konfiguracja capacitor.config.json dla Projedudei
Write-Host "`n[2/6] Konfiguracja Capacitor pod aplikację Projedudei ..." -ForegroundColor Yellow
$capConfig = @'
{
  "appId": "com.projedudei.app",
  "appName": "Projedudei",
  "webDir": "www",
  "backgroundColor": "#0f172a",
  "android": {
    "allowMixedContent": false
  },
  "ios": {
    "contentInset": "never",
    "backgroundColor": "#0f172a"
  }
}
'@
Set-Content -Path (Join-Path $nativeDir "capacitor.config.json") -Value $capConfig -Encoding utf8
Write-Utf8NoBom (Join-Path $nativeDir "capacitor.config.json") $capConfig

$androidAppDir = Join-Path $nativeDir "android\app"
$androidMainDir = Join-Path $androidAppDir "src\main"

# 3. Zmiana pakietu w Android: strings.xml, build.gradle, MainActivity.java
Write-Host "`n[3/6] Konfiguracja AndroidManifest, strings.xml i pakietu com.projedudei.app ..." -ForegroundColor Yellow

# strings.xml
$stringsXml = @'
<?xml version='1.0' encoding='utf-8'?>
<resources>
    <string name="app_name">Projedudei</string>
    <string name="title_activity_main">Projedudei</string>
    <string name="package_name">com.projedudei.app</string>
    <string name="custom_url_scheme">com.projedudei.app</string>
</resources>
'@
Write-Utf8NoBom (Join-Path $androidMainDir "res\values\strings.xml") $stringsXml

# app/build.gradle
$gradlePath = Join-Path $androidAppDir "build.gradle"
Copy-Item -Force (Join-Path $sourceNative "android\app\build.gradle") $gradlePath
$gradleContent = [System.IO.File]::ReadAllText($gradlePath)
$gradleContent = $gradleContent.Replace('namespace "pl.abbaojcze.koronka"', 'namespace "com.projedudei.app"')
$gradleContent = $gradleContent.Replace('applicationId "pl.abbaojcze.koronka"', 'applicationId "com.projedudei.app"')
$gradleContent = $gradleContent.Replace('versionCode 300', 'versionCode 100')
$gradleContent = $gradleContent.Replace('versionName "3.0.0"', 'versionName "1.0.0"')
Write-Utf8NoBom $gradlePath $gradleContent

# MainActivity.java w nowej strukturze katalogów
$oldJavaDir = Join-Path $androidMainDir "java\pl\abbaojcze\koronka"
if (Test-Path $oldJavaDir) {
    Remove-Item -Recurse -Force (Join-Path $androidMainDir "java\pl")
}
$newJavaDir = Join-Path $androidMainDir "java\com\projedudei\app"
New-Item -ItemType Directory -Force -Path $newJavaDir | Out-Null

$mainActivityJava = @'
package com.projedudei.app;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {}
'@
Write-Utf8NoBom (Join-Path $newJavaDir "MainActivity.java") $mainActivityJava

# capacitor.config.json w assets
$assetsCapConfig = @'
{
	"appId": "com.projedudei.app",
	"appName": "Projedudei",
	"webDir": "public"
}
'@
Write-Utf8NoBom (Join-Path $androidMainDir "assets\capacitor.config.json") $assetsCapConfig

# 4. Kopiowanie plików aplikacji do Android assets/public/
Write-Host "`n[4/6] Wgrywanie plików webowych Projedudei do assets/public/ ..." -ForegroundColor Yellow
$publicAssetsDir = Join-Path $androidMainDir "assets\public"
if (Test-Path $publicAssetsDir) {
    Remove-Item -Recurse -Force $publicAssetsDir
}
New-Item -ItemType Directory -Force -Path $publicAssetsDir | Out-Null

# Kopiuj z out/ z pominięciem downloads/
Get-ChildItem -Path $outDir -Recurse | Where-Object { $_.FullName -notmatch '\\downloads' } | ForEach-Object {
    $rel = $_.FullName.Substring($outDir.Length).TrimStart('\', '/')
    $dest = Join-Path $publicAssetsDir $rel
    if ($_.PSIsContainer) {
        if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Force -Path $dest | Out-Null }
    } else {
        Copy-Item -Force $_.FullName $dest
    }
}

# Podmień ikony launchera na niebieskiego Kuraka
$icon192 = Join-Path $ProjectDir "public\icon-192.png"
if (Test-Path $icon192) {
    Get-ChildItem -Path (Join-Path $androidMainDir "res") -Filter "*launcher*.png" -Recurse | ForEach-Object {
        Copy-Item -Force $icon192 $_.FullName
    }
}

# 5. Generowanie lub konfiguracja keystore dla Projedudei
Write-Host "`n[5/6] Przygotowanie klucza podpisu keystore ..." -ForegroundColor Yellow
$keysDir = Join-Path $nativeDir "android-keys"
if (-not (Test-Path $keysDir)) {
    New-Item -ItemType Directory -Force -Path $keysDir | Out-Null
}
$keystorePath = Join-Path $keysDir "projedudei-release.jks"
$keystoreProps = Join-Path $keysDir "keystore.properties"

$keytoolExe = "C:\Program Files\Android\Android Studio\jbr\bin\keytool.exe"
if (-not (Test-Path $keystorePath)) {
    & $keytoolExe -genkeypair -v -keystore $keystorePath -alias projedudei -keyalg RSA -keysize 2048 -validity 10000 -storepass projedudei2026 -keypass projedudei2026 -dname "CN=Projedudei, OU=App, O=Projedudei, L=Warsaw, C=PL"
}

$propsContent = @"
storeFile=../../android-keys/projedudei-release.jks
storePassword=projedudei2026
keyAlias=projedudei
keyPassword=projedudei2026
"@
Write-Utf8NoBom $keystoreProps $propsContent

# 6. Kompilacja Gradle (APK + AAB)
Write-Host "`n[6/6] Kompilacja pakietów Android (APK i AAB) za pomocą Gradle ..." -ForegroundColor Yellow
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:ANDROID_HOME = "C:\Users\kutad\AppData\Local\Android\Sdk"

Push-Location (Join-Path $nativeDir "android")
try {
    & .\gradlew.bat assembleRelease bundleRelease --no-daemon
    if ($LASTEXITCODE -ne 0) {
        throw "Błąd kompilacji Gradle! Kod wyjścia: $LASTEXITCODE"
    }
} finally {
    Pop-Location
}

# Kopiowanie zbudowanych plików do katalogu downloads
$builtApk = Join-Path $androidAppDir "build\outputs\apk\release\app-release.apk"
$builtAab = Join-Path $androidAppDir "build\outputs\bundle\release\app-release.aab"

if (Test-Path $builtApk) {
    Copy-Item -Force $builtApk (Join-Path $downloadsDir "projedudei.apk")
    Copy-Item -Force $builtApk (Join-Path $outDownloadsDir "projedudei.apk")
    Write-Host " -> Gotowy projedudei.apk ($([math]::Round((Get-Item $builtApk).Length / 1MB, 2)) MB)" -ForegroundColor Green
} else {
    Write-Error "Nie znaleziono zbudowanego pliku $builtApk"
}

if (Test-Path $builtAab) {
    Copy-Item -Force $builtAab (Join-Path $downloadsDir "projedudei.aab")
    Copy-Item -Force $builtAab (Join-Path $outDownloadsDir "projedudei.aab")
    Write-Host " -> Gotowy projedudei.aab ($([math]::Round((Get-Item $builtAab).Length / 1MB, 2)) MB)" -ForegroundColor Green
} else {
    Write-Error "Nie znaleziono zbudowanego pliku $builtAab"
}

# 7. Budowa Apple iOS IPA dla Projedudei
Write-Host "`nBudowa Apple iOS IPA (projedudei.ipa) ..." -ForegroundColor Yellow
$destIpa = Join-Path $downloadsDir "projedudei.ipa"
$outIpa = Join-Path $outDownloadsDir "projedudei.ipa"

$refIpa = "C:\proj\koronka-2.0-październik\assets\koronka.ipa"
if (Test-Path $refIpa) {
    $tempIpaDir = Join-Path $env:TEMP "projedudei_ipa_build"
    if (Test-Path $tempIpaDir) { Remove-Item -Recurse -Force $tempIpaDir }
    New-Item -ItemType Directory -Force -Path $tempIpaDir | Out-Null

    [System.IO.Compression.ZipFile]::ExtractToDirectory($refIpa, $tempIpaDir)

    # Zmiana nazwy katalogu .app jeśli istnieje
    $payloadDir = Join-Path $tempIpaDir "Payload"
    $appDirs = Get-ChildItem -Path $payloadDir -Directory -Filter "*.app"
    $appDir = $appDirs[0].FullName
    $newAppDir = Join-Path $payloadDir "Projedudei.app"
    if ($appDir -ne $newAppDir) {
        Rename-Item -Path $appDir -NewName "Projedudei.app"
        $appDir = $newAppDir
    }

    # Usuń stare pliki Koronki z wnętrza .app
    $obsoleteFiles = @("index.html", "app.js", "style.css", "sw.js", "manifest.json")
    foreach ($of in $obsoleteFiles) {
        $fp = Join-Path $appDir $of
        if (Test-Path $fp) { Remove-Item -Force $fp }
    }
    $oldAssetsDir = Join-Path $appDir "assets"
    if (Test-Path $oldAssetsDir) { Remove-Item -Recurse -Force $oldAssetsDir }

    # Zmień nazwę pliku wykonywalnego jeśli istnieje
    $oldExec = Join-Path $appDir "Koronka"
    $newExec = Join-Path $appDir "Projedudei"
    if (Test-Path $oldExec) {
        Move-Item -Force $oldExec $newExec
    }

    # Nadpisz Info.plist
    $infoPlistPath = Join-Path $appDir "Info.plist"
    if (Test-Path $infoPlistPath) {
        $plist = [System.IO.File]::ReadAllText($infoPlistPath)
        $plist = $plist -replace '<key>CFBundleDisplayName</key>\s*<string>[^<]*</string>', "<key>CFBundleDisplayName</key>`n`t<string>Projedudei</string>"
        $plist = $plist -replace '<key>CFBundleName</key>\s*<string>[^<]*</string>', "<key>CFBundleName</key>`n`t<string>Projedudei</string>"
        $plist = $plist -replace '<key>CFBundleIdentifier</key>\s*<string>[^<]*</string>', "<key>CFBundleIdentifier</key>`n`t<string>com.projedudei.app</string>"
        $plist = $plist -replace '<key>CFBundleExecutable</key>\s*<string>[^<]*</string>', "<key>CFBundleExecutable</key>`n`t<string>Projedudei</string>"
        Write-Utf8NoBom $infoPlistPath $plist
    }

    # Wstaw pliki webowe Projedudei bezpośrednio do Payload/Projedudei.app/
    Copy-Item -Recurse -Force (Join-Path $publicAssetsDir "*") $appDir

    # Nadpisz ikony iOS
    if (Test-Path $icon192) {
        Get-ChildItem -Path $appDir -Filter "*AppIcon*.png" -Recurse | ForEach-Object {
            Copy-Item -Force $icon192 $_.FullName
        }
    }

    if (Test-Path $destIpa) { Remove-Item -Force $destIpa }
    [System.IO.Compression.ZipFile]::CreateFromDirectory($tempIpaDir, $destIpa)
    Copy-Item -Force $destIpa $outIpa
    Remove-Item -Recurse -Force $tempIpaDir
    Write-Host " -> Gotowy projedudei.ipa ($([math]::Round((Get-Item $destIpa).Length / 1MB, 2)) MB)" -ForegroundColor Green
}

# 8. Budowa Offline ZIP
Write-Host "`nBudowa pakietu Offline ZIP (projedudei-offline.zip) ..." -ForegroundColor Yellow
$destZip = Join-Path $downloadsDir "projedudei-offline.zip"
$outZip = Join-Path $outDownloadsDir "projedudei-offline.zip"

if (Test-Path $destZip) { Remove-Item -Force $destZip }

$tempZipDir = Join-Path $env:TEMP "projedudei_zip_build"
if (Test-Path $tempZipDir) { Remove-Item -Recurse -Force $tempZipDir }
New-Item -ItemType Directory -Force -Path $tempZipDir | Out-Null

Get-ChildItem -Path $outDir -Recurse | Where-Object { $_.FullName -notmatch '\\downloads' } | ForEach-Object {
    $rel = $_.FullName.Substring($outDir.Length).TrimStart('\', '/')
    $target = Join-Path $tempZipDir $rel
    if ($_.PSIsContainer) {
        if (-not (Test-Path $target)) { New-Item -ItemType Directory -Force -Path $target | Out-Null }
    } else {
        Copy-Item -Force $_.FullName $target
    }
}

[System.IO.Compression.ZipFile]::CreateFromDirectory($tempZipDir, $destZip)
Copy-Item -Force $destZip $outZip
Remove-Item -Recurse -Force $tempZipDir
Write-Host " -> Gotowy projedudei-offline.zip ($([math]::Round((Get-Item $destZip).Length / 1MB, 2)) MB)" -ForegroundColor Green

Write-Host "`n============================================================" -ForegroundColor Cyan
Write-Host " WSZYSTKIE PAKIETY ZBUDOWANE SUKCESEM DLA PROJEDUDEI!" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Cyan

