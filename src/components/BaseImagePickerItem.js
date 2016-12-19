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
        selected: {
            type: Array,
            default: [],
        },
    },

    computed: {
        image() {
            return this.imageAdaptor( this.pickerImage );
        },

        'isSelected'() {
            var index = this.selected.indexOf( this.image.id );
            return index != -1 ? true : false;
        },
    },

    methods: {
        select() {
            this.$emit( 'select', this.image );
        },
        confirm() {
            this.$emit( 'confirm', this.pickerItem )
        },
    },

}
