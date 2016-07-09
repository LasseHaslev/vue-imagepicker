import Vue from 'vue'

import { ImagePickerInstall } from './ImagePicker'
import ImagePicker from './ImagePicker'

Vue.use( ImagePickerInstall );

var data = [];
for (var i = 0, len = 10; i < len; i++) {
    data.push({
        id: i,
        path: "http://placehold.it/350x350",
    });
}

new Vue({
    el: 'body',

    data() {
        return {
            images: data,
        }
    },

    events: {
        'ImageSelected'( selected ) {
            console.log( selected );
        }
    },

    components: { ImagePicker }
})
