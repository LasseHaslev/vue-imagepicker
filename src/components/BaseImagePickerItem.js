export default {
    props: {
        'picker-image': {
            type: Object,
            default:null,
        },
        imageAdaptor: {
            type: Function,
            default( image ) {
                return image;
            }
        },
    },

    computed: {
        image() {
            return this.imageAdaptor( this.pickerImage );
        }
    }

}
