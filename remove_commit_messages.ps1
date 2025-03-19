Write-Host "Setting up Git to minimize commit messages..." -ForegroundColor Green
$null | Out-File -FilePath "empty_message.txt"
git config --local commit.template "empty_message.txt"
Write-Host "Done! Future commits will use empty messages by default." -ForegroundColor Green
Write-Host "To commit with a minimized message, use:" -ForegroundColor Yellow
Write-Host "git commit -F empty_message.txt" -ForegroundColor Cyan 