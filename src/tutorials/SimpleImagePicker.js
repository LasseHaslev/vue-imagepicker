import { ImagePicker } from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        <a href="https://github.com/LasseHaslev/vue-modal/blob/master/src/components/ImagePicker.js">
                            Image picker
                        </a>
                    </h3>
                    <h4 class="subtitle is-4">Open a simple logic with bulma</h4>
                    <p>If <a href="http://bulma.io/">Bulma.io</a> does not fit your needs, you can create a simular file like this package <a href="https://github.com/LasseHaslev/vue-modal/blob/master/src/components/ImagePicker.js">ImagePicker.js</a>.</p>
                    <p> Make shure you add the <a href="https://github.com/LasseHaslev/vue-modal/blob/master/src/components/BaseImagePicker.js">BaseImagePicker.js</a> as a mixin, and add events for click and close.</p>

        <br>


                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="has-text-centered">
                        <a @click="open" class="button is-primary is-large" href="#">Open image picker</a>
                    </div>
                    <image-picker url="https://jsonplaceholder.typicode.com/photos?limit=10"
    :images-adaptor="imagesAdaptor"
    :image-adaptor="imageAdaptor"
    ref="imagePicker"></image-picker>
                </div>
            </section>
        </div>
    `,

    methods: {
        open() {
            this.$refs.imagePicker.open();
        },
        imagesAdaptor( images ) {
            return images.slice( 0, 5 );
        },
        imageAdaptor( image ) {
            return {
                id: image.id,
                path: image.url,
            };
        },
    },

    components: {
        ImagePicker,
    }
}
