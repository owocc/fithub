import prisma from "./prisma";

// 统计网站数据
export const contentStatistics = async () => {
  const [encyclopediaTotal, sportTotal, subscribeTotal] = await Promise.all([
    prisma.encyclopedia.count(),
    prisma.sport.count(),
    prisma.subscribe.count(),
  ]);

  return {
    encyclopediaTotal,
    sportTotal,
    subscribeTotal,
  };
};
