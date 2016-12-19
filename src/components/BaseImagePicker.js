import BaseModal from '@lassehaslev/vue-modal';

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
    }
}
