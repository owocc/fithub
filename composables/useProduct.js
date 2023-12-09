export default function () {
  // 查看商品详情
  const viewProduct = (id) => {
    const router = useRouter();
    router.push({
      path: `/shop/${id}`,
    });
  };

  return {
    viewProduct,
  };
}
