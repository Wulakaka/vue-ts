import "./public-path";
import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import routes from "@/router/routes";
import VueRouter from "vue-router";
import store from "./store";
import "@/styles/fonts.css";
import "@/test/classes";
import "@/test/classes/test";

Vue.use(VueRouter);

Vue.config.productionTip = false;

let router = null;
let instance: null | Vue = null;

type Props = object & { container?: HTMLElement };

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean;
  }
}

function render(props: Props = {}) {
  const { container } = props;
  // appName 为子应用名
  const appName = "vue-ts";
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? `/micro/${appName}/` /*在主应用中访问子应用的地址的base*/ : "/",
    mode: "history",
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") || "#app" : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props: Props) {
  console.log("[vue] props from main framework", props);
  render(props);
}

export async function unmount() {
  if (instance) {
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
    router = null;
  }
}
