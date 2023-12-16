import prisma from "./prisma";

// 获取百科列表
export const getEncyclopediaList = async ({ query, userId }) => {
  const [list] = await Promise.all([
    prisma.encyclopedia.findMany({
      where: {
        title: {
          contains: query?.title,
        },
        userId,
      },
      orderBy: [
        {
          like: "desc", // 按照点赞数降序
        },
        {
          createdAt: "desc", // 按照创建时间降序
        },
      ],
      take: query?.limit,
    }),
  ]);

  return {
    list,
    total: list.length,
  };
};

//获取百科详情
export const getEncyclopedia = async (id) => {
  return await prisma.encyclopedia.findUnique({
    where: {
      id,
    },
  });
};

//创建百科
export const createEncylopedia = async (data, user) => {
  return await prisma.encyclopedia.create({
    data: {
      title: data.title,
      content: data.content,
      userId: user.id,
      description: data.description,
    },
  });
};

// 添加点赞
export const addLike = async (id) => {
  const encyclopedia = await prisma.encyclopedia.findUnique({
    where: {
      id: id,
    },
  });
  const like = encyclopedia.like + 1;

  return await prisma.encyclopedia.update({
    where: {
      id,
    },
    data: {
      like,
    },
  });
};
