# @lassehaslev/imagesizerjs
> Automaticly ads ```-{width}x{height}-resize``` to image filename.

## Usage
```
var ImageSize = require( '@lassehaslev/imagesizerjs' );
var imageSize = new ImageSize( document.querySelector( 'img' ), {
    steps: 200, // How many pixels before new image
} );
```

## Installation

Run ```npm install @lassehaslev/imagesizerjs --save``` in your project folder


## Development
``` bash
# Clone package
git clone https://github.com/LasseHaslev/imagesizerjs

# install dependencies
npm install

# serve with hot reload at http://localhost:3000/
gulp watch

# build for production with minification
gulp --production
```

## License

MIT, dawg
