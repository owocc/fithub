export default function (msg, params) {
  const toast = useNuxtApp().$toast;
  return toast.info(msg, {
    theme: "dark",
    ...params,
  });
}
