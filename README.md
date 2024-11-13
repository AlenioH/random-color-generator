# The task

The task was to create a CLI application that would return a random color when run.

### What it does

It returns a hash block in a random color with the hex code of that color when run in command line. If user specifies a color (e.g. "red"), the block will be colored that and return the hex code of the color chosen. Currently supported colors by the library are: red, orange, yellow, green, blue, purple, pink and monochrome. If luminosity is added to that (e.g. "red dark"), the block is returned in this color. Supported values for luminosity are: dark, light and bright. 

To run the application in the command line use for example:
```
node index.js red light
```