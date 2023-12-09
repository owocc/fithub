import prisma from "./prisma";
export const getEncyclopediaList = async ({ pagination, query }) => {
  const { skip, take } = pagination;
  //   const { name } = query;

  //   const where = name ? { name: { contains: name } } : {};

  const [list, total] = await Promise.all([
    prisma.encyclopedia.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        category: true,
        image: true,
      },
    }),
    prisma.encyclopedia.count(),
  ]);

  return {
    list,
    total,
  };
};

export const getEncyclopedia = async (id) => {
  return await prisma.encyclopedia.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      image: true,
      products: true,
      sports: true,
    },
  });
};
