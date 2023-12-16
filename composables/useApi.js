import { ofetch } from "ofetch";

export default function () {
  // 读取用户仓库,获取token
  const userStore = useUserStore();

  const useApiFetch = ofetch.create({
    baseURL: "/api",
    headers: {
      token: userStore.token,
    },
    // 响应拦截器,自动处理响应的消息
    async onResponse({ response }) {
      if (response.ok && response._data?.msg) {
        useToast().success(response._data?.msg);
      }
    },

    // 错误拦截器
    async onResponseError({ response, error }) {
      useToast().error(response._data?.statusMessage);
    },
  });

  return {
    useApiFetch,
  };
}
