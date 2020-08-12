@echo off
set repo_folder="d:\User\grid_desk\Samurize"
set samurize_folder="c:\Program Files (x86)\Samurize"

echo UPDATING CONFIG INIS...
copy %repo_folder%\Configs\ %samurize_folder%\Configs\

echo UPDATING SCRIPT...
copy %repo_folder%\Scripts\grid_desk.js %samurize_folder%\Scripts\