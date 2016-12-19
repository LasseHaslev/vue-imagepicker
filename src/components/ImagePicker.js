import BaseImagePicker from './BaseImagePicker';
export default {
    template: `
        <div class="modal is-large"
             :class="{ 'is-active': isShowingModal }">
            <div class="modal-background" @click="close"></div>
            <div class="modal-content">
        <div class="box">
            <image-picker-item v-for="image in pickerImages" :picker-image="image" :imageAdaptor="imageAdaptor"></image-picker-item>
        </div>
            </div>
            <button class="modal-close" @click="close"></button>
        </div>
    `,

    mixins: [ BaseImagePicker ],
}
