import prisma from "./prisma";
import md5 from "md5";
// 添加新用户
export const addUser = (data) => {
  return prisma.user.create({
    data: {
      ...data,
      password: md5(data.password),
    },
  });
};

//通过用户名查找用户
export const findUserByName = (username) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};

// 通过ID查找用户,并查询出用户发布的百科总数和注册时间
export const findUserById = async (id) => {
  const [user, encyclopediaCount, likes] = await Promise.all([
    // 通过ID查找用户
    prisma.user.findUnique({
      where: {
        id,
      },
    }),

    //查询用户发布的百科总数
    prisma.encyclopedia.count({
      where: {
        userId: id,
      },
    }),
    prisma.encyclopedia.findMany({
      where: {
        userId: id,
      },
      select: {
        like: true,
      },
    }),
  ]);

  return {
    ...user,
    encyclopediaCount,
    likeCount: likes.reduce((a, b) => a + b.like, 0), //计算被点赞总数
    // 计算用户注册时间,从注册到现在的天数,向下取整
    createDay: Math.floor((Date.now() - user.createdAt) / 1000 / 60 / 60 / 24),
  };
};
