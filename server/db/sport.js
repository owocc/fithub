import prisma from "./prisma";
// -------- 动作库 Service --------

// 获取动作库列表
export const getSportList = async ({ pagination, query }) => {
  const { skip, take } = pagination;

  // 查询条件
  const where = {};

  const [list, total] = await Promise.all([
    prisma.sport.findMany({
      include: {
        category: true,
        image: true,
      },
    }),
    prisma.sport.count(),
  ]);

  return {
    list,
    total,
  };
};

export const getSport = async (id) => {
  return await prisma.sport.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      encyclopedias: true,
      products: true,
      image: true,
    },
  });
};
