# Minimal Commit Message Scripts

These scripts are designed to help minimize or remove commit messages in your Git workflow.

## Available Scripts

### Setup Script (`remove_commit_messages.ps1`)
This script configures Git to use empty commit messages by default.

To run in PowerShell:
```powershell
.\remove_commit_messages.ps1
```

If you get an execution policy error, you can run:
```powershell
powershell -ExecutionPolicy Bypass -File .\remove_commit_messages.ps1
```

### Quick Commit Script (`quick_commit.ps1`)
This script allows you to quickly commit all changes with minimal or empty messages.

To run with an empty message:
```powershell
.\quick_commit.ps1
```

To run with a minimal message:
```powershell
.\quick_commit.ps1 -DefaultMessage "minimal"
```

With execution policy bypass:
```powershell
powershell -ExecutionPolicy Bypass -File .\quick_commit.ps1
```

## Manual Commands

If you prefer to use Git commands directly:

1. Create an empty message file:
```
echo. > empty_message.txt
```

2. Commit using the empty message:
```
git commit -F empty_message.txt
```

## Warning

Removing commit messages entirely is generally not recommended for collaborative projects as it reduces the ability to track and understand changes. These scripts are provided for specific use cases where commit message history is not desired. 