@echo off
echo Setting up Git to minimize commit messages...
echo. > empty_message.txt
git config --local commit.template empty_message.txt
echo Done! Future commits will use empty messages by default.
echo To commit with a minimized message, use: git commit -F empty_message.txt 