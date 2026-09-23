Add-Type -AssemblyName System.Drawing
$srcPath = "C:/Users/tirth_dx5h19p/.gemini/antigravity/brain/5aa4f776-39c2-47ec-a474-8c966b8d5f10/.user_uploaded/media_1789626475284.png"
$destPath = "c:/Users/tirth_dx5h19p/Stryke Labs/Stryke Labs Website/stryke-labs-website-development/public/images/stryke-labs-icon-square.png"

$img = [System.Drawing.Image]::FromFile($srcPath)
$size = [math]::Max($img.Width, $img.Height)
$bmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($bmp)

# Set high quality compositing
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$g.Clear([System.Drawing.Color]::Transparent)
$x = [math]::Round(($size - $img.Width) / 2)
$y = [math]::Round(($size - $img.Height) / 2)
$g.DrawImage($img, $x, $y, $img.Width, $img.Height)

$g.Dispose()
$img.Dispose()
$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Done"
