import VueResource from 'vue-resource'
import ImagePickerComponent from './ImagePicker.vue';
var install = function( Vue ) {
    Vue.use( VueResource );
}

export default ImagePickerComponent;
export {
    install as ImagePickerInstall,
}
