import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#F2ccc3',
                secondary: '#E78F8E',
                accent: '#ACD8AA',
                error: '#F48498',
            },
        },
    },
});
