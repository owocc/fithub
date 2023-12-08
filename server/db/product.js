import prisma from "./prisma";
export const getProducts = async () => {
  return await prisma.product.findMany();
};

