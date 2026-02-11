@echo off
REM Generate PDF from index.html using headless Chrome
REM Usage: Double-click or run from command prompt

setlocal

REM Get the directory where this script is located (removes trailing backslash)
set "SCRIPT_DIR=%~dp0"
set "SCRIPT_DIR=%SCRIPT_DIR:~0,-1%"

REM Chrome executable path
set "CHROME=C:\Program Files\Google\Chrome\Application\chrome.exe"

REM Output path
set "OUTPUT=%SCRIPT_DIR%\files\EscobedoJohnResume.pdf"

REM Build file URL (convert backslashes to forward slashes)
set "INPUT_PATH=%SCRIPT_DIR%\index.html"
set "INPUT_URL=file:///%INPUT_PATH:\=/%"

echo Generating PDF from index.html...
echo Output: %OUTPUT%

"%CHROME%" --headless --print-to-pdf="%OUTPUT%" --no-pdf-header-footer "%INPUT_URL%"

if exist "%OUTPUT%" (
    echo.
    echo Success! PDF saved to:
    echo %OUTPUT%
) else (
    echo.
    echo Error: PDF was not created
    exit /b 1
)

endlocal
