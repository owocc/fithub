export default function () {
  const infoMap = [
    {
      title: "品牌",
      key: "brand",
    },
    {
      title: "产地",
      key: "origin",
    },
    {
      title: "型号",
      key: "modelName",
    },
    {
      title: "商品编号",
      key: "productNumber",
    },
  ];
  
  // 查看商品详情
  const viewProduct = (id) => {
    const router = useRouter();
    router.push({
      path: `/shop/${id}`,
    });
  };

  return {
    viewProduct,
    infoMap,
  };
}
