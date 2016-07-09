<style lang="sass">
$brand-color-light: #DDF;
$brand-gray-light: #EEE;
$image-picker-margin: 16px;
$image-picker-item-border: 8px;
$image-picker-item-check-mark-margin: 8px;
$image-picker-check-mark: 'v';
.PickerItem {
    transition: all 5s;
    transition: width .4s;

    width: calc(100% * (1/1) - #{ $image-picker-margin } - 1px);
    @media ( min-width: 350px ) {
        width: calc(100% * (1/2) - #{ $image-picker-margin } - 1px);
    }
    @media ( min-width: 580px ) {
        width: calc(100% * (1/3) - #{ $image-picker-margin } - 1px);
    }
    @media ( min-width: 780px ) {
        width: calc(100% * (1/4) - #{ $image-picker-margin } - 1px);
    }


    margin-left: $image-picker-margin/2;
    margin-right: $image-picker-margin/2;


    background-color: $brand-gray-light;
    margin-bottom: $image-picker-margin;
    &--selected {
        position: relative;
        &:before {
            position:absolute;
            display: block;
            content:'';
            top:0;
            right:0;
            bottom:0;
            left:0;
            // width: 100%;
            // height: 100%;
            border: $image-picker-item-border solid $brand-color-light;
            background-color: rgba( 0,0,0,.65 );
        }
        &:after {
            font-size: 1.5em;
            position: absolute;
            display:block;
            content: $image-picker-check-mark;
            color:white;

            bottom: $image-picker-item-border + $image-picker-item-check-mark-margin;
            right: $image-picker-item-border + $image-picker-item-check-mark-margin;
        }
    }

    &__image {
        padding-top: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
}
</style>
<template>
<div class="PickerItem">
    <a style="display:block;" href="#" @click.prevent="select" @dblclick.prevent="confirm" :class="{'PickerItem--selected':selected}">
        <div class="PickerItem__image field-image bg-gray-lighter cursor-pointer" :style="{
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
