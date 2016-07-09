import RestfulVue from '@lassehaslev/restful-vue'
import ImagePickerComponent from './ImagePicker.vue';
var install = function( Vue ) {
    Vue.use( RestfulVue );
}

export default ImagePickerComponent;
export {
    install as ImagePickerInstall,
}
