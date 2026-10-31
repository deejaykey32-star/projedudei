Add-Type -AssemblyName System.Drawing

function Make-Icon([int]$size, [string]$path) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    # Background gradient dark slate
    $bgRect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
    $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $bgRect,
        [System.Drawing.Color]::FromArgb(255, 15, 23, 42),
        [System.Drawing.Color]::FromArgb(255, 2, 6, 23),
        [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal
    )
    $g.FillRectangle($bgBrush, $bgRect)
    $bgBrush.Dispose()

    # Outer circle border (amber & blue)
    $pad = [int]($size * 0.05)
    $cSize = $size - (2 * $pad)
    $cRect = New-Object System.Drawing.Rectangle($pad, $pad, $cSize, $cSize)
    $circleBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $cRect,
        [System.Drawing.Color]::FromArgb(255, 37, 99, 235),
        [System.Drawing.Color]::FromArgb(255, 245, 159, 0),
        45.0
    )
    $pen = New-Object System.Drawing.Pen($circleBrush, [float]($size * 0.035))
    $g.DrawEllipse($pen, $cRect)
    $pen.Dispose()
    $circleBrush.Dispose()

    # Inner badge
    $innerPad = [int]($size * 0.12)
    $iSize = $size - (2 * $innerPad)
    $innerBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 30, 41, 59))
    $g.FillEllipse($innerBrush, $innerPad, $innerPad, $iSize, $iSize)
    $innerBrush.Dispose()

    # Blue Head circle
    $headSize = [int]($size * 0.38)
    $headX = [int](($size - $headSize) / 2)
    $headY = [int]($size * 0.22)
    $headBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 37, 99, 235))
    $g.FillEllipse($headBrush, $headX, $headY, $headSize, $headSize)
    $headBrush.Dispose()

    # Red comb on top
    $combBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 239, 68, 68))
    $g.FillEllipse($combBrush, [int]($size * 0.44), [int]($size * 0.12), [int]($size * 0.12), [int]($size * 0.14))
    $g.FillEllipse($combBrush, [int]($size * 0.34), [int]($size * 0.15), [int]($size * 0.10), [int]($size * 0.12))
    $g.FillEllipse($combBrush, [int]($size * 0.56), [int]($size * 0.15), [int]($size * 0.10), [int]($size * 0.12))
    $combBrush.Dispose()

    # Orange Beak
    $beakBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 245, 159, 0))
    $p1 = [System.Drawing.Point]::new([int]($size * 0.43), [int]($size * 0.40))
    $p2 = [System.Drawing.Point]::new([int]($size * 0.57), [int]($size * 0.40))
    $p3 = [System.Drawing.Point]::new([int]($size * 0.50), [int]($size * 0.50))
    [System.Drawing.Point[]]$pts = @($p1, $p2, $p3)
    $g.FillPolygon($beakBrush, $pts)
    $beakBrush.Dispose()

    # Briefcase (gold & leather) at bottom center
    $caseW = [int]($size * 0.44)
    $caseH = [int]($size * 0.28)
    $caseX = [int](($size - $caseW) / 2)
    $caseY = [int]($size * 0.54)
    $caseBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 44, 24, 16))
    $g.FillRectangle($caseBrush, $caseX, $caseY, $caseW, $caseH)
    $caseBrush.Dispose()

    # Gold handle
    $handlePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 245, 159, 0), [float]($size * 0.03))
    $g.DrawArc($handlePen, [int]($size * 0.43), [int]($caseY - ($size * 0.06)), [int]($size * 0.14), [int]($size * 0.10), 180, 180)
    $handlePen.Dispose()

    # Gold locks
    $goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 245, 159, 0))
    $g.FillRectangle($goldBrush, [int]($caseX + ($caseW * 0.2)), [int]($caseY + ($caseH * 0.3)), [int]($size * 0.04), [int]($size * 0.06))
    $g.FillRectangle($goldBrush, [int]($caseX + ($caseW * 0.72)), [int]($caseY + ($caseH * 0.3)), [int]($size * 0.04), [int]($size * 0.06))
    $goldBrush.Dispose()

    # Text monogram "AI PM"
    $font = New-Object System.Drawing.Font("Arial", [float]($size * 0.09), [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString("AI PM", $font, $textBrush, [float]($size / 2), [float]($caseY + ($caseH * 0.45)), $sf)
    $textBrush.Dispose()
    $font.Dispose()

    $g.Dispose()

    $parent = Split-Path $path
    if (-not (Test-Path $parent)) {
        New-Item -ItemType Directory -Force -Path $parent | Out-Null
    }
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Zapisano $path ($size x $size)"
}

Make-Icon 192 "c:\proj\projedudei\public\icon-192.png"
Make-Icon 512 "c:\proj\projedudei\public\icon-512.png"
Make-Icon 180 "c:\proj\projedudei\public\apple-touch-icon.png"
