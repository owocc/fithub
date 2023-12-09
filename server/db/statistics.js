import prisma from "./prisma";

export const contentStatistics = async () => {
  const [encyclopediaTotal, productTotal, sportTotal, subscribeTotal] =
    await Promise.all([
      prisma.encyclopedia.count(),
      prisma.product.count(),
      prisma.sport.count(),
      prisma.subscribe.count(),
    ]);

  return {
    encyclopediaTotal,
    productTotal,
    sportTotal,
    subscribeTotal,
  };
};
