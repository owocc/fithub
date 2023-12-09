import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
prisma.$connect();

// 删除所有数据
const deleteALl = async () => {
  await prisma.category.deleteMany();
};

// 初始化分类数据
const initCategory = async () => {
  console.log("初始化分类数据中...");
  await prisma.category.createMany({
    data: [
      {
        name: "品牌",
        description: "品牌分类",
        id: 0,
      },
      {
        name: "器材类型",
        description: "器材类型分类",
        id: 1,
      },
    ],
  });
};

const init = async () => {
  console.log("初始化数据库中...");
  try {
    await deleteALl();
    await initCategory();
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
    console.log("初始化数据库完成!");
  }
};
// await init();
