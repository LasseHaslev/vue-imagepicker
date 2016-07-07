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
            <picker-item v-for="image in models | orderBy 'updated_at' -1" :image.sync="image" :selected-images.sync="selected"></picker-item>
        </div>

        <button type="button" class="Button Button--primary" @click="confirm">Select</button>
        <button type="button" class="Button Button--default" data-dismiss="modal" @click="$refs.modal.close()">Close</button>

    </modal>

</template>
<script>

import { container } from '@lassehaslev/restful-vue';
import Modal from 'vue-modal-browserify';
import PickerItem from './PickerItem.vue';

export default {

    mixins: [ container ],

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

    },

    ready() {
    
        this.open();

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
            /* this.$set( 'selected', this.selected ); */
            var self = this;
            this.$refs.modal.open();
        },

        selectFirst: function() {
            if ( ! this.multiple && ! this.selected.length && this.models.length ) {
                this.selected.push( this.models[0] );
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
