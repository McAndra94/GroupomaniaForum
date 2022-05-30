import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "./assets/bootstrap.min.css";
import "../public/styles.css";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
//const db = getFirestore(fireApp);
//const admin = require("firebase-admin");

const app = createApp(App);
app.config.productionTip = false;
app.use(router);
app.use(store);

const requireComponent = require.context(
  "./components",
  true,
  /App[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName);
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");
  app.component(baseComponentName, baseComponentConfig);
});

app.mount("#app");
