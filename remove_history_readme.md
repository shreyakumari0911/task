# Remove Git Commit History

These scripts will completely remove all commit history from your Git repository while preserving the current state of your files.

## ⚠️ WARNING

**THIS ACTION IS IRREVERSIBLE!** These scripts will:
1. Delete all commit history
2. Create a single new commit with your current files
3. Force-push to overwrite the remote repository

All previous commits, branches, tags, and other Git metadata will be permanently lost.

## Available Scripts

### PowerShell Script (`remove_history.ps1`)

To run in PowerShell:
```powershell
.\remove_history.ps1
```

With execution policy bypass:
```powershell
powershell -ExecutionPolicy Bypass -File .\remove_history.ps1
```

### Batch Script (`remove_history.bat`)

To run in Command Prompt:
```
remove_history.bat
```

## Manual Steps

If you prefer to run the commands manually:

1. Create a new branch without history:
   ```
   git checkout --orphan temp_branch
   ```

2. Add all files and commit:
   ```
   git add -A
   git commit -m "."
   ```

3. Delete the main branch and rename:
   ```
   git branch -D main
   git branch -m main
   ```

4. Force push to remote:
   ```
   git push -f origin main
   ```

## After Running

After removing history:
- All collaborators will need to re-clone the repository or use `git fetch --all` followed by `git reset --hard origin/main`
- Any open pull requests will be invalidated
- All branches will be lost

## When to Use

Consider removing history when:
- You need to remove sensitive information that was accidentally committed
- You want to make the repository smaller and more manageable
- You're starting a new phase of development and want a clean slate 