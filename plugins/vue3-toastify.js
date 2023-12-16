import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// 全局通知方法
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 1000, theme: "dark" });

  return {
    provide: {
      toast,
    },
  };
});
