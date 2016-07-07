import Vue from 'vue'
import ImagePicker from './ImagePicker/ImagePicker.vue'

new Vue({
    el: 'body',

    data() {
        return {
            images: [
                {
                    path: "http://placehold.it/350x350",
                },
                {
                    path: "http://placehold.it/350x350",
                },
                {
                    path: "http://placehold.it/350x350",
                },
                {
                    path: "http://placehold.it/350x350",
                },
                {
                    path: "http://placehold.it/350x350",
                },
            ]
        }
    },

    components: { ImagePicker }
})
