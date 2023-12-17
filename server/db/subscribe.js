import prisma from "./prisma";

// 添加定制需求,记录用户邮箱
export const addSubscribe = (mail) => {
  return prisma.subscribe.create({
    data: {
      mail,
    },
  });
};
