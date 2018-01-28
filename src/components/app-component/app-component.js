import Vue from 'vue';
import template from './app-component-template.html';

const AppComponent = Vue.extend({
    template: template, // we can use ES6 shorthand template only
    data() {
        return {
            label: "Burak Buruk",
            test:"abc"
        };
    }
});

export default AppComponent;