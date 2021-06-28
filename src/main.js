import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//style imports
import "primeflex/primeflex.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
// component imports
import Button from "primevue/button";

import Card from "primevue/card";


const app = createApp(App);
app.use(PrimeVue, { ripple: true });



app.use(router);

// component injections
app.component("Button", Button);
app.component("Card", Card);

app.mount("#app");
