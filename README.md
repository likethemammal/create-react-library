# React-Primitives NPM library starter example

based on Facebook's <a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create react app</a>.

**Warning: This not be kept up-to-date. Just a proof of concept**

## Converted to custom setup

Moved all dependencies to dev dependencies because we don't need extra dependencies for our library after build, but we want all this features while developing: 

* React, JSX, ES6, and Flow syntax support.
* Language extras beyond ES6 like the object spread operator.
* A dev server that lints for common errors.
* Import CSS and image files directly from JavaScript.
* Autoprefixed CSS, so you don’t need `-webkit` or other prefixes.
* A `build` script to bundle JS, CSS, and images for production.

## Getting Started

Clone repo

````
git clone https://github.com/likethemammal/create-react-primitives-library.git
````

Install dependencies

`npm install` or `yarn install`

Start development server

`npm start` or `yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Library files

All library files are located inside `src/lib`  

## Demo app

Is located inside `src/demo` directory, here you can test your library while developing

## Testing

`npm run test` or `yarn run test`

## Build library

`npm run build` or `yarn run build`

Produces production version of library under the `build` folder.

## Publish library

`npm publish`

## Example library built with this starter kit

https://github.com/DimitriMikadze/react-under-construction
