import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import WaveUI from "wave-ui";
import "wave-ui/dist/wave-ui.css";
import "@mdi/font/css/materialdesignicons.min.css";
const app = createApp(App);

app.use(WaveUI, {});

app.mount("#app");
