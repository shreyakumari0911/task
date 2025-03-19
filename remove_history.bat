@echo off
echo WARNING: This script will permanently remove all commit history!
echo The current state of your files will be preserved as a single initial commit.
echo Press Ctrl+C to cancel or any key to continue...
pause > nul

rem Check if we're in a git repo
if not exist ".git" (
    echo Error: Not in a git repository. Please run this from the root of your git repo.
    exit /b 1
)

rem Create a temporary branch without history
echo Creating temporary branch...
git checkout --orphan temp_branch

rem Add all files
echo Adding all files...
git add -A

rem Commit with a minimal message
echo Creating initial commit...
git commit -m "."

rem Delete the main branch
echo Deleting original branch...
git branch -D main

rem Rename the current branch to main
echo Renaming temporary branch to main...
git branch -m main

rem Force push to remote repository
echo Force pushing to remote repository...
git push -f origin main

echo Done! All commit history has been removed.
echo Your repository now has a single commit with the current state of all files. 