@echo off
set PATH=%PATH%;C:\Program Files\nodejs
echo Installing Node.js dependencies for CyberGuard...
npm.cmd install
echo.
echo Setup complete! You can now use run-dev.bat
pause
