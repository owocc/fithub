import { addLike } from "~/server/db/encyclopedia";

// 点赞内容
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = body;
  const res = await addLike(parseInt(id));
  return {
    msg: "点赞成功",
    ...res,
  };
});
