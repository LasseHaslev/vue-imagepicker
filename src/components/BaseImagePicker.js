import BaseModal from '@lassehaslev/vue-modal';
import ImagePickerItem from './ImagePickerItem';

export default {
    mixins: [ BaseModal ],

    props: {
        url: {
            type: String,
            default: null,
        },
        imagesAdaptor: {
            type: Function,
            default( images ) {
                return images;
            },
        },
        imageAdaptor: {
            type: Function,
            default( images ) {
                return images;
            },
        },
    },

    data() {
        return {
            pickerImages: [],
        }
    },

    mounted() {
        this.open();
    },

    methods: {
        onModalOpen() {
            this.loadImages();
        },
        loadImages() {
            this.$http.get( this.url ).then( function( response ) {
                // console.log(response);
                this.pickerImages = this.imagesAdaptor( response.body );
            } ).catch( function( response ) {
                console.log( response );
            } )
        },

        confirm() {
            console.log('Image picker confirm!');
            this.close();
        },
        cancel() {
            console.log('Image picker confirm!');
            this.close();
        },
    },

    components: {
        ImagePickerItem,
    },

}
