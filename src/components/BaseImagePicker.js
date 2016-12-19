import BaseModal from '@lassehaslev/vue-modal';
import ImagePickerItem from './ImagePickerItem';

export default {
    mixins: [ BaseModal ],

    props: {
        url: {
            type: String,
            default: null,
        },

        selected: {
            type: Array,
            default: [],
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
        multiple: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            pickerImages: [],
            selectedImages: [],
        }
    },

    mounted() {
        this.open();
    },

    methods: {
        onModalOpen() {
            this.loadImages();
            this.selectedImages = this.selected;
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

        onItemSelect( image ) {
            if ( this.multiple ) {
                this.selectMultiple( image );
            }
            else {
                this.selectedImages = [ image.id ];
            }
        },

        selectMultiple( image ) {
            var index = this.imageIndex( image );
            if ( index != -1 ) {
                this.selectedImages.splice( index, 1 );
            }
            else {
                this.selectedImages.push( image.id );
            }
        },

        imageIndex( image ) {
            return this.selectedImages.indexOf( image.id );
        },
    },

    components: {
        ImagePickerItem,
    },

}
