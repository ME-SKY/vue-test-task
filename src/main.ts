import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import { createVuestic } from 'vuestic-ui'
// import 'vuestic-ui/css'
import "./assets/main.css";
import 'element-plus/dist/index.css';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'




const app = createApp(App);

app.use(createPinia());

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router);
// app.use(createVuestic());

app.mount("#app");
