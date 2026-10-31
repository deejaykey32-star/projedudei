Add-Type -AssemblyName System.IO.Compression.FileSystem

$apkPath = "c:\proj\projedudei\public\downloads\projedudei.apk"
$ipaPath = "c:\proj\projedudei\public\downloads\projedudei.ipa"
$zipPath = "c:\proj\projedudei\public\downloads\projedudei-offline.zip"

Write-Host "--- Weryfikacja projedudei.apk ---"
$apk = [System.IO.Compression.ZipFile]::OpenRead($apkPath)
Write-Host "Liczba wpisow w APK: $($apk.Entries.Count)"
$kursEntries = @($apk.Entries | Where-Object { $_.FullName -like "*kurs*" })
Write-Host "Wpisy kursu w APK: $($kursEntries.Count)"
$apk.Dispose()

Write-Host "`n--- Weryfikacja projedudei.ipa ---"
$ipa = [System.IO.Compression.ZipFile]::OpenRead($ipaPath)
$plistEntry = $ipa.Entries | Where-Object { $_.FullName -like "*Info.plist" }
$stream = $plistEntry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$content = $reader.ReadToEnd()
$reader.Close()
$ipa.Dispose()

if ($content -match "Projedudei") {
    Write-Host "IPA zawiera 'Projedudei': TAK" -ForegroundColor Green
}
if ($content -match "Koronka") {
    Write-Host "IPA zawiera 'Koronka': TAK (BLAD)" -ForegroundColor Red
} else {
    Write-Host "IPA zawiera 'Koronka': NIE (CZYSTO)" -ForegroundColor Green
}

Write-Host "`n--- Weryfikacja projedudei-offline.zip ---"
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$indexEntry = $zip.Entries | Where-Object { $_.FullName -eq "index.html" }
if ($indexEntry) {
    Write-Host "Offline ZIP zawiera index.html: TAK" -ForegroundColor Green
}
$zip.Dispose()

