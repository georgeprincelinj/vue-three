import Vue from "vue";
import App from "./App.vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import VueCompositionApi from "@vue/composition-api";

Vue.config.productionTip = false;

const requireComponent = require.context(
  "./components",
  false,
  /Fw[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
Vue.use(VueCompositionApi);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
