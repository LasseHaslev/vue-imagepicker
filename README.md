# @lassehaslev/vue-imagepicker
> Simple image picker for vuejs.

## Installation
Run ```npm install @lassehaslev/vue-imagepicker --save``` in your project folder

## Usage
``` js
import ImagePicker from '@lassehaslev/vue-imagepicker';

<template>
    <!-- Use either url or models -->
    <image-picker

        <!-- If url is set, we replace the image models -->
        url="/path/to/api"

        <!-- Sets models to use in array -->
        :models="[{ path: '/path/to/image.jpg' }]"

        <!-- Sets multiple selection -->
        :multiple="true">

        <!-- All elemetns inside the image-picker tag are clickacke and will lunch the image-picker modal -->
        <button>Select image</button>

    </image-picker>
</template>
<script>
export default {
    components: { ImagePicker }
    events: {
        'ImageSelected'( image ) {
            console.log( image )
        }
    }
}
</script>
});

```


## Development
``` bash
# Clone package
git clone https://github.com/LasseHaslev/vue-imagepicker

# install dependencies
npm install

# serve with hot reload at http://localhost:3000/
gulp watch

# build for production with minification
gulp --production
```

## License

MIT, dawg
