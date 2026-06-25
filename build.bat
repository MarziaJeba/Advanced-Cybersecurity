@echo off
set PATH=%PATH%;C:\Program Files\nodejs
echo Building CyberGuard for production...
npm.cmd run build
echo.
echo Build complete! Check the /dist folder.
pause
