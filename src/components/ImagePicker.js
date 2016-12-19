import BaseImagePicker from './BaseImagePicker';
export default {
    template: `
        <div class="modal is-large"
             :class="{ 'is-active': isShowingModal }">
            <div class="modal-background" @click="close"></div>
            <div class="modal-content">
        <div class="box">
        <pre>{{ pickerImages | json }}</pre>
        </div>
            </div>
            <button class="modal-close" @click="close"></button>
        </div>
    `,

    mixins: [ BaseImagePicker ],
}
