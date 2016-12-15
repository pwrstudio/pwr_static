# PWR Static Site Boilerplate

#### Build system
- gulp

#### CSS
- sass
- autoprefixer
- cssnano

#### Javascript
- browserify
- jquery
- vue.js
- uglify

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


#### Automatic reloading
- browser-sync

#### Webfont generation
- fontgen

#### Image optimization
- imagemin

#### Error handeling
- plumber
- notify

*** 

Requires node.js, npm and gulp to be installed.

Install dependencies: 

`npm install`

Run build process:

`gulp`

Build for production (minify js/css - remove debug messages)
`gulp --production`

Spawn a child-theme for distribution with the build.sh script  

`./build.sh`
