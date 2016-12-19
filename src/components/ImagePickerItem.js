import BaseImagePickerItem from './BaseImagePickerItem';
export default {
    template: `
    <div>
    <pre>{{ image }}</pre>
    <br>
    </div>
    `,
    mixins: [ BaseImagePickerItem ],
}
