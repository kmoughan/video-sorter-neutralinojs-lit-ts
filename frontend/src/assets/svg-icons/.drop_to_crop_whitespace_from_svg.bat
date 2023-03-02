@echo off

echo Remove whitespace from around SVG image
echo Helps make all svg icons display ay the same size when imported into a font
echo.

"C:\Program Files\Inkscape\bin\inkscape.exe" --actions "select-all;fit-canvas-to-selection;export-plain-svg;export-height=32" --export-overwrite "%1"

echo.
echo complete
echo.

