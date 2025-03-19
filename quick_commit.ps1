param (
    [Parameter(Mandatory=$false)]
    [string]$DefaultMessage = ""
)

# Create empty message file if not already present
if (-not (Test-Path "empty_message.txt")) {
    $null | Out-File -FilePath "empty_message.txt"
}

# Add all changes
git add .

# Commit with empty message
if ([string]::IsNullOrEmpty($DefaultMessage)) {
    git commit -F empty_message.txt
} else {
    $DefaultMessage | Out-File -FilePath "temp_message.txt"
    git commit -F temp_message.txt
    Remove-Item -Path "temp_message.txt" -Force
}

Write-Host "Changes committed with minimal message!" -ForegroundColor Green 