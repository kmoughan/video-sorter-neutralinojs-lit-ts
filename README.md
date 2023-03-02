# neutralino-preact-wmr-base-setup

## Notes

Directory structure is two tier,

Within the project the base folder is for Neutralinojs
while the inner ./frontend folder contains the web project

## Setup Neutralino

`git clone git@github.com:kmoughan/base-neutralinojs-app.git`

`pnpm install`

`neu update`

Place the neutralino.js file into the ./frontend/build folder

Configure the `neutralino.config.js`. Specifically, make sure devUrl port points to the development server running in ./frontend

## Setup Frontend

`cd ./frontend`

`git clone git@github.com:kmoughan/base-lit-ts-app.git`
