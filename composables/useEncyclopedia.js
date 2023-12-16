export default function () {
  // 查看百科详情
  const viewDetail = (id) => {
    const router = useRouter();
    router.push("/encyclopedia/" + id);
  };

  const { useApiFetch } = useApi();

  // 创建百科
  const createEncylopedia = (data) => {
    return useApiFetch("/encyclopedia", {
      method: "POST",
      body: data,
    });
  };

  const fetchLike = (id) => {
    return $fetch("/api/encyclopedia/like", {
      method: "POST",
      body: {
        id: id,
      },
    });
  };
  return {
    viewDetail,
    createEncylopedia,
    fetchLike,
  };
}
