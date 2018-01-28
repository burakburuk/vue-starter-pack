import Vue from 'vue';
// don't worry, we haven't created this yet!
import AppComponent from './components/app-component/app-component';
import TextInput from './components/text-input/text-input';
import Panel from './components/panel/panel';

new Vue({
    el: '#app',
    components: {
        'panel':Panel,
        'app-component': AppComponent,
        'text-input': TextInput
    }
});