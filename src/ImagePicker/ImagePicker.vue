<style lang="sass">
.ImagePicker {
    &__grid {
        display: flex;
        flex-wrap: wrap;
        margin-left: -8px;
        margin-right: -8px;
    }
}
.Button {
    border: 1px solid gray;
    border-radius: 8px;
    background-color: white;
    padding: 10px 20px;
}
</style>
<template>
    <span @click="$refs.modal.open">
        <slot></slot>
    </span>

    <modal v-ref:modal>

        <div class="ImagePicker__grid">
            <picker-item v-for="image in images | orderBy 'updated_at' -1" :image.sync="image" :selected-images.sync="selected"></picker-item>
        </div>

        <button type="button" class="Button Button--primary" @click="confirm">Select</button>
        <button type="button" class="Button Button--default" data-dismiss="modal" @click="$refs.modal.close()">Close</button>

    </modal>

</template>
<script>

import Modal from 'vue-modal-browserify';
import PickerItem from './PickerItem.vue';

export default {

    props: {

        url: {
            type: String,
            default: null,
        },

        multiple: {
            type: Boolean,
            default: false,
        },

        selected: {
            type: Array,
            default() {
                return [];
            },
        },

        images: {
            type: Array,
            default() {
                return [];
            }
        }

    },

    ready() {
        this.$refs.modal.open();
    },

    events: {

        'ImageUploaded': function( image ) {

            // Add image to images list
            this.images.push(image);

            // Add the selected image if no image is selected
            if ( !( this.images.indexOf( this.selected[0] ) > -1 ) ) {
                this.$set( 'selected', [] );
                this.selected.push( image );
            }

        },

        'ImageDeselected': function( image ) {

            if ( this.multiple ) {
                this.removeImage( image );
            }

        },

        'ImageSelected': function( image ) {

            this.selectImage( image );

        },

        'ImageConfirmed': function() {
            this.confirm();
        },
    },

    methods: {
        open: function() {
            this.$set( 'selected', this.selected );
            this.loadImages();
            this.$refs.modal.open();
        },

        loadImages: function() {

            var self = this;

            var slug = this.$route.params ? this.$route.params.account : null;
            if ( slug ) {
                ImageService.getFromAccount( this.account ).then( function( images ) {
                    self.$set( 'accountImages', images );
                    self.selectFirst();

                } );
            }

        },

        selectFirst: function() {
            if ( ! this.multiple && ! this.selected.length && this.images.length ) {
                this.selected.push( this.images[0] );
            }
        },

        selectImage: function( image ) {

            if ( this.multiple ) {
                this.selected.push( image );
            }
            else {
                this.$set( 'selected', [ image ] );
            }
        },

        removeImage: function( image ) {
            var index = this.selected.indexOf( image );
            this.selected.splice( index, 1 );
        },

        confirm: function() {

            var data = this.multiple ? this.selected : this.selected[0];

            this.$dispatch( 'ImageSelected', data );

            this.$refs.modal.close();

            return data;
        },
    },

    components: {
        Modal,
        PickerItem,
    },
}

</script>
