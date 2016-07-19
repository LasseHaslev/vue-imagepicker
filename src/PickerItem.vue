<template>
<div class="ImagePicker__PickerItem">
    <a style="display:block;" href="#" @click.prevent="select" @dblclick.prevent="confirm" :class="{'ImagePicker__PickerItem--selected':selected}">
        <div class="ImagePicker__PickerItem__image field-image bg-gray-lighter cursor-pointer" :style="{
            'background-image': 'url(' + image.path + ')',
        }"></div>
    </a>
</div>
</template>
<script>
export default {
    props: {
        image: {
            type:Object,
            default:null,
        },

        'selected-images': {
            twoWay: true,
            type: Array,
            default: function() {
                return [];
            }
        }
    },

    data: function() {
        return {

            selected: false,
            isLoaded: false,

        };
    },

    ready: function() {
        var self = this;
        this.$el.addEventListener( 'load', function() {
            self.$set( 'isLoaded', true );
        } );

        this.checkSelected();
    },

    watch: {
        'selectedImages': function() {
            this.checkSelected();
        },
    },

    methods: {

        checkSelected: function() {
            var index = this.selectedImages.indexOf( this.image )
            this.$set( 'selected', index != -1 ? true : false );
        },

        select: function() {
            // If select deselect
            if ( this.selected ) {
                this.$dispatch( 'ImageDeselected', this.image );
            }
            else {
                this.$dispatch( 'ImageSelected', this.image );
            }
        },

        confirm: function() {
            this.$dispatch( 'ImageConfirmed' );
        },

    },
}
</script>
