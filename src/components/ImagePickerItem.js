import BaseImagePickerItem from './BaseImagePickerItem';
export default {
    template: `
        <div class="column is-3">
            <div v-if="image.path"
                style="padding-bottom: 100%"
                @dblclick="$emit( 'confirm' )"
                :style="{
                    'background-image': 'url(' + image.path + ')',
                    'background-size':'contain',
                    'background-position':'center',
                    'background-repeat': 'no-repeat',
                    'background-color': '#ccc',
                    'cursor':'pointer',
            }">
            </div>
        </div>
    `,
    mixins: [ BaseImagePickerItem ],
}
