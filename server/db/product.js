import prisma from "./prisma";
// -------- 产品service --------

// 获取产品列表
export const getProductList = async ({ pagination, query }) => {
  const { skip, take } = pagination;

  // 查询条件
  const where = {};

  const list = await prisma.product.findMany({
    include: {
      category: true,
      images: {
        select: {
          url: true,
          alt: true,
        },
        orderBy: {
          sort: "asc",
        },
      },
    },
    skip,
    take,
  });

  const total = await prisma.product.count();
  return {
    list,
    total,
  };
};

export const getProduct = async (id) => {
  return await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      detail: {
        include: {
          images: {
            orderBy: {
              sort: "asc",
            },
          },
        },
      },
      images: {
        orderBy: {
          sort: "asc",
        },
      },
      category: true,
      sports: true,
      encyclopedia: true,
    },
  });
};
