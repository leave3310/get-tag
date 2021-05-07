import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#FFE6E8',
                secondary: '#E78F8E',
                accent: '#ACD8AA',
                error: '#F48498',
            },
        },
    },
});
