@echo off

SET svg_icons_location=*.svg
SET svg_temp_font=../fonts/.temp-svgsheet-font.svg
SET font_location=../fonts/svgsheet.woff2

call npx svgicons2svgfont --fontname=svgsheet --startunicode 1 --normalize --fixedWidth --centerhorizontally -y --preserveAspectRatio -o %svg_temp_font% %svg_icons_location%

call npx font-convert --pathIn=%svg_temp_font% --pathOut=%font_location%

del "%svg_temp_font%"

echo.
echo Complete
echo.

pause