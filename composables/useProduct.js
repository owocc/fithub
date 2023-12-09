export default function () {
  // 查看商品详情
  const viewProduct = (id) => {
    useRouter().push({
      path: `/shop/${id}`,
    });
  };

  return {
    viewProduct,
  };
}
