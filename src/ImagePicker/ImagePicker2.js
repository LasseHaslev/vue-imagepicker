// This one does not work
// (https://github.com/babel/babelify/issues/103)
import RestfulVue from '@lassehaslev/restful-vue';
import ImagePickerComponent from './ImagePicker.vue';
var install = function( Vue ) {
    Vue.use( RestfulVue );
}

export default ImagePickerComponent;
export {
    install as ImagePickerInstall,
}
