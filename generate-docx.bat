@echo off
REM Generate DOCX from index.html using Node.js
REM Usage: Double-click or run from command prompt

setlocal

REM Get the directory where this script is located
set "SCRIPT_DIR=%~dp0"

echo Generating DOCX from index.html...
node "%SCRIPT_DIR%generate-docx.js"

endlocal
