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
import Divider from "primevue/divider";
import Knob from "primevue/knob";
import Skeleton from "primevue/skeleton";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";

const app = createApp(App);
app.use(PrimeVue, { ripple: true });

app.use(router);

// component injections
app.component("Button", Button);
app.component("Card", Card);
app.component("Divider", Divider);
app.component("Knob", Knob);
app.component("Skeleton", Skeleton);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Tag", Tag);

app.mount("#app");
