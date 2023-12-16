import prisma from "./prisma";
// -------- 动作库 Service --------

// 获取动作库列表
export const getSportList = async ({ query }) => {
  const [list] = await Promise.all([
    prisma.sport.findMany({
      // 查询条件
      where: {
        name: {
          contains: query?.name,
        },
      },
    }),
  ]);

  return {
    list,
    total: list.length,
  };
};

// 获取动作库详情
export const getSport = async (id) => {
  return await prisma.sport.findUnique({
    where: {
      id,
    },
  });
};
