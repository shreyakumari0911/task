Write-Host "WARNING: This script will permanently remove all commit history!" -ForegroundColor Red
Write-Host "The current state of your files will be preserved as a single initial commit." -ForegroundColor Yellow
Write-Host "Press Ctrl+C to cancel or any key to continue..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Check if we're in a git repo
if (-not (Test-Path ".git")) {
    Write-Host "Error: Not in a git repository. Please run this from the root of your git repo." -ForegroundColor Red
    exit 1
}

# Create a temporary branch without history
Write-Host "Creating temporary branch..." -ForegroundColor Green
git checkout --orphan temp_branch

# Add all files
Write-Host "Adding all files..." -ForegroundColor Green
git add -A

# Commit with a minimal message
Write-Host "Creating initial commit..." -ForegroundColor Green
git commit -m "."

# Delete the main branch
Write-Host "Deleting original branch..." -ForegroundColor Green
git branch -D main

# Rename the current branch to main
Write-Host "Renaming temporary branch to main..." -ForegroundColor Green
git branch -m main

# Force push to remote repository
Write-Host "Force pushing to remote repository..." -ForegroundColor Green
git push -f origin main

Write-Host "Done! All commit history has been removed." -ForegroundColor Green
Write-Host "Your repository now has a single commit with the current state of all files." -ForegroundColor Green 