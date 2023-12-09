import prisma from "./prisma";
export const getEncyclopediaList = async ({ query }) => {
  const [list, total] = await Promise.all([
    prisma.encyclopedia.findMany({
      where: {
        title: {
          contains: query?.title,
        },
      },
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

export const getEncyclopediaPage = async ({ pagination, query }) => {
  const { skip, take } = pagination;
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
      skip,
      take,
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
