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
    <span @click="open">
        <slot></slot>
    </span>

    <modal v-ref:modal>

        <div class="ImagePicker__grid">
            <picker-item v-for="image in models | orderBy 'updated_at' -1" :image.sync="image" :selected-images.sync="selectedImages"></picker-item>
        </div>

        <button type="button" class="Button Button--primary" @click="confirm">Select</button>
        <button type="button" class="Button Button--default" data-dismiss="modal" @click="cancel">Close</button>

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

        models: {
            type: Array,
            default() {
                return [];
            },
        },

    },

    data() {
        return {
            selectedImages: [],
        }
    },

    events: {

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
            console.log( this.selected );
            this.$set( 'selectedImages', this.selected.slice(0) );

            var self = this;
            this.loadImages().then( function() {
                self.$refs.modal.open();
            } );
            
        },

        loadImages() {
            // If no image is provided we just resolve the promise 
            if ( ! this.url ) {
                return Promise.resolve();
            }

            // Else
            var self = this;
            return new Promise( function( resolve, reject ) {
                self.$http.get( this.url ).then( function( request ) {
                    self.$set( 'models', request.data.data );
                    resolve();
                }).catch(function( reason ) {
                    reject( reason );
                });
            } );
        },

        selectFirst: function() {
            if ( ! this.multiple && ! this.selectedImages.length && this.models.length ) {
                this.selectedImages.push( this.models[0] );
            }
        },

        selectImage: function( image ) {

            if ( this.multiple ) {
                this.selectedImages.push( image );
            }
            else {
                this.$set( 'selectedImages', [ image ] );
            }
        },

        removeImage: function( image ) {
            var index = this.selectedImages.indexOf( image );
            this.selectedImages.splice( index, 1 );
        },

        confirm: function() {

            var data = this.multiple ? this.selectedImages : this.selectedImages[0];

            this.$dispatch( 'ImageSelected', data );

            this.$refs.modal.close();

            return data;
        },

        cancel() {
            this.$refs.modal.close();
        },
    },

    components: {
        Modal,
        PickerItem,
    },
}

</script>
