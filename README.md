# @lassehaslev/vue-image-picker

> Image picker for Vue.js v2

## Installation
Run ```npm install @lassehaslev/vue-image-picker --save``` in your project folder

## Usage
Use this simple image-picker with [Bulma](https://trello.com/b/BDC3zQvN).
``` js
import { Modal } from '@lassehaslev/vue-image-picker';
export default {
    template: `
        <a @click="open" class="button is-primary is-large" href="#">Open a simple image-picker</a>
        <image-picker ref="image-picker">
            <!-- Modal content Start -->
            <div class="box has-text-centered">
                <h1 class="title">
                    First image-picker
                </h1>
            </div>
            <!-- Modal content END -->
        </image-picker>
    `,
    methods: {
        open() {
            this.$refs.image-picker.open();
        }
    },
    components: {
        Modal,
    }
}
```

## Extend / Build your own!
Just include the BaseModal class as a mixin, and you are good to call ```open``` and ```close``` and checking ```isShowingModal``` boolean.
```js
import BaseModal from '@lassehaslev/vue-image-picker';

export default {
    template: `
    <div v-show="isShowingModal" class="image-picker is-active">
        <div class="image-picker-background" @click="close"></div>
        <div class="image-picker-content">
            <slot></slot>
        </div>
        <button class="image-picker-close" @click="close"></button>
    </div>
    `,

    mixins: [ BaseModal ],
}
```


## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
