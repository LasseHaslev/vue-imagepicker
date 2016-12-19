import BaseImagePicker from './BaseImagePicker';
export default {
    template: `
        <div class="modal"
             :class="{ 'is-active': isShowingModal }">
            <div class="modal-background" @click="close"></div>
            <div class="modal-content">
                <div class="box">
                    <slot>
                        <h4 class="title">Please select an image</h4>
                    </slot>
                    <div class="columns is-mobile is-multiline">
                        <image-picker-item v-for="image in pickerImages" @confirm="confirm" :picker-image="image" :imageAdaptor="imageAdaptor"></image-picker-item>
                    </div>
                    <button class="button is-primary" @click="confirm">Confirm</button>
                    <button class="button is-default" @click="cancel">Cancel</button>
                </div>
            </div>
            <button class="modal-close" @click="close"></button>
        </div>
    `,

    mixins: [ BaseImagePicker ],
}
