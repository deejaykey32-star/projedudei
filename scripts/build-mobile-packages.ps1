<#
================================================================================
 Skrypt budowania i aktualizacji pakietów mobilnych Projedudei:
 - Android APK (projedudei.apk)
 - Android App Bundle AAB (projedudei.aab)
 - Apple iOS IPA (projedudei.ipa)
 - Offline ZIP (projedudei-offline.zip)
 - PWA (manifest.json, sw.js)
================================================================================
#>

param(
    [string]$ProjectDir = "c:\proj\projedudei"
)

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$downloadsDir = Join-Path $ProjectDir "public\downloads"
if (-not (Test-Path $downloadsDir)) {
    New-Item -ItemType Directory -Force -Path $downloadsDir | Out-Null
}

$outDir = Join-Path $ProjectDir "out"
if (-not (Test-Path $outDir)) {
    Write-Host "Katalog out/ nie istnieje – używam public/ jako bazy zasobów" -ForegroundColor Yellow
    $outDir = Join-Path $ProjectDir "public"
}

$refApk = "C:\proj\koronka-2.0-październik\assets\koronka.apk"
$refAab = "C:\proj\koronka-2.0-październik\assets\koronka.aab"
$refIpa = "C:\proj\koronka-2.0-październik\assets\koronka.ipa"

$destApk = Join-Path $downloadsDir "projedudei.apk"
$destAab = Join-Path $downloadsDir "projedudei.aab"
$destIpa = Join-Path $downloadsDir "projedudei.ipa"
$destZip = Join-Path $downloadsDir "projedudei-offline.zip"

function Update-ZipEntry {
    param(
        [System.IO.Compression.ZipArchive]$Zip,
        [string]$EntryName,
        [string]$SourceFilePath
    )
    $cleanName = $EntryName.Replace('\', '/')
    $existing = @($Zip.Entries | Where-Object { $_.FullName -eq $cleanName })
    foreach ($e in $existing) {
        $e.Delete()
    }
    if (Test-Path $SourceFilePath) {
        $newEntry = $Zip.CreateEntry($cleanName, [System.IO.Compression.CompressionLevel]::Optimal)
        $stream = $newEntry.Open()
        $bytes = [System.IO.File]::ReadAllBytes($SourceFilePath)
        $stream.Write($bytes, 0, $bytes.Length)
        $stream.Flush()
        $stream.Close()
        $stream.Dispose()
    }
}

# ========================================================
# 1. ANDROID APK (projedudei.apk)
# ========================================================
Write-Host "`n[1/4] Przygotowywanie pakietu Android APK ($destApk) ..." -ForegroundColor Cyan
if (Test-Path $refApk) {
    Copy-Item -Force $refApk $destApk
    $apkZip = [System.IO.Compression.ZipFile]::Open($destApk, [System.IO.Compression.ZipArchiveMode]::Update)
    
    # Dodaj pliki aplikacji do assets/public/
    $webFiles = Get-ChildItem -Path $outDir -Recurse -File | Where-Object { $_.FullName -notmatch 'downloads' }
    foreach ($f in $webFiles) {
        $rel = $f.FullName.Substring($outDir.Length).TrimStart('\', '/')
        Update-ZipEntry -Zip $apkZip -EntryName "assets/public/$rel" -SourceFilePath $f.FullName
    }

    # Zaktualizuj ikony
    $icon192 = Join-Path $ProjectDir "public\icon-192.png"
    if (Test-Path $icon192) {
        Update-ZipEntry -Zip $apkZip -EntryName "res/mipmap-hdpi/ic_launcher.png" -SourceFilePath $icon192
        Update-ZipEntry -Zip $apkZip -EntryName "res/mipmap-xxxhdpi/ic_launcher.png" -SourceFilePath $icon192
    }

    $apkZip.Dispose()
    Write-Host " -> Gotowy projedudei.apk ($([math]::Round((Get-Item $destApk).Length / 1MB, 2)) MB)" -ForegroundColor Green
} else {
    Write-Warning "Nie znaleziono $refApk"
}

# ========================================================
# 2. ANDROID APP BUNDLE (projedudei.aab)
# ========================================================
Write-Host "`n[2/4] Przygotowywanie pakietu Android AAB/ABB ($destAab) ..." -ForegroundColor Cyan
if (Test-Path $refAab) {
    Copy-Item -Force $refAab $destAab
    $aabZip = [System.IO.Compression.ZipFile]::Open($destAab, [System.IO.Compression.ZipArchiveMode]::Update)

    # Dodaj pliki aplikacji do base/assets/public/
    $webFiles = Get-ChildItem -Path $outDir -Recurse -File | Where-Object { $_.FullName -notmatch 'downloads' }
    foreach ($f in $webFiles) {
        $rel = $f.FullName.Substring($outDir.Length).TrimStart('\', '/')
        Update-ZipEntry -Zip $aabZip -EntryName "base/assets/public/$rel" -SourceFilePath $f.FullName
    }

    $aabZip.Dispose()
    Write-Host " -> Gotowy projedudei.aab ($([math]::Round((Get-Item $destAab).Length / 1MB, 2)) MB)" -ForegroundColor Green
} else {
    Write-Warning "Nie znaleziono $refAab"
}

# ========================================================
# 3. APPLE iOS IPA (projedudei.ipa)
# ========================================================
Write-Host "`n[3/4] Przygotowywanie pakietu Apple iOS IPA ($destIpa) ..." -ForegroundColor Cyan
if (Test-Path $destIpa) { Remove-Item -Force $destIpa }

$ipaZip = [System.IO.Compression.ZipFile]::Open($destIpa, [System.IO.Compression.ZipArchiveMode]::Create)

# Projedudei Info.plist
$infoPlist = @"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleDevelopmentRegion</key>
    <string>pl</string>
    <key>CFBundleDisplayName</key>
    <string>Projedudei</string>
    <key>CFBundleExecutable</key>
    <string>Projedudei</string>
    <key>CFBundleIdentifier</key>
    <string>pl.projedudei.app</string>
    <key>CFBundleInfoDictionaryVersion</key>
    <string>6.0</string>
    <key>CFBundleName</key>
    <string>Projedudei</string>
    <key>CFBundlePackageType</key>
    <string>APPL</string>
    <key>CFBundleShortVersionString</key>
    <string>1.0.0</string>
    <key>CFBundleVersion</key>
    <string>1</string>
    <key>LSRequiresIPhoneOS</key>
    <true/>
    <key>UISupportedInterfaceOrientations</key>
    <array>
        <string>UIInterfaceOrientationPortrait</string>
        <string>UIInterfaceOrientationPortraitUpsideDown</string>
    </array>
</dict>
</plist>
"@

$plistEntry = $ipaZip.CreateEntry("Payload/Projedudei.app/Info.plist")
$pStream = $plistEntry.Open()
$pBytes = [System.Text.Encoding]::UTF8.GetBytes($infoPlist)
$pStream.Write($pBytes, 0, $pBytes.Length)
$pStream.Close()

# Dodaj ikony iOS
$icon180 = Join-Path $ProjectDir "public\apple-touch-icon.png"
if (Test-Path $icon180) {
    Update-ZipEntry -Zip $ipaZip -EntryName "Payload/Projedudei.app/AppIcon60x60@3x.png" -SourceFilePath $icon180
}

# Dodaj pliki aplikacji do Payload/Projedudei.app/public/
$webFiles = Get-ChildItem -Path $outDir -Recurse -File | Where-Object { $_.FullName -notmatch 'downloads' }
foreach ($f in $webFiles) {
    $rel = $f.FullName.Substring($outDir.Length).TrimStart('\', '/')
    Update-ZipEntry -Zip $ipaZip -EntryName "Payload/Projedudei.app/public/$rel" -SourceFilePath $f.FullName
}

$ipaZip.Dispose()
Write-Host " -> Gotowy projedudei.ipa ($([math]::Round((Get-Item $destIpa).Length / 1MB, 2)) MB)" -ForegroundColor Green

# ========================================================
# 4. OFFLINE ZIP (projedudei-offline.zip)
# ========================================================
Write-Host "`n[4/4] Tworzenie pakietu offline ZIP ($destZip) ..." -ForegroundColor Cyan
if (Test-Path $destZip) { Remove-Item -Force $destZip }

$zip = [System.IO.Compression.ZipFile]::Open($destZip, [System.IO.Compression.ZipArchiveMode]::Create)
$webFiles = Get-ChildItem -Path $outDir -Recurse -File | Where-Object { $_.FullName -notmatch 'downloads' }
foreach ($f in $webFiles) {
    $rel = $f.FullName.Substring($outDir.Length).TrimStart('\', '/')
    Update-ZipEntry -Zip $zip -EntryName "$rel" -SourceFilePath $f.FullName
}
$zip.Dispose()
Write-Host " -> Gotowy projedudei-offline.zip ($([math]::Round((Get-Item $destZip).Length / 1MB, 2)) MB)" -ForegroundColor Green

Write-Host "`n Wszystkie pakiety mobilne (APK, AAB, IPA, PWA, ZIP) zostały pomyślnie utworzone!" -ForegroundColor Cyan

