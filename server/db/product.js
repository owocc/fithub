import prisma from "./prisma";
// -------- 产品service --------

// 获取产品列表
export const getProductList = async ({ query }) => {

  // 查询条件
  const where = {
    name: {
      // contains: query?.name,
    },
  };

  const list = await prisma.product.findMany({
    where: {
      name: {
        contains: query?.name,
      },
    },
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

// 获取产品数据+分页
export const getProductListByPage = async ({ pagination, query }) => {
  const { skip, take } = pagination;

  // 查询条件
  // const where = {};

  const list = await prisma.product.findMany({
    skip,
    take,
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
      detail: true,
    },
  });

  const total = await prisma.product.count();
  return {
    list,
    total,
  };
};
