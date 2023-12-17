import { createEncylopedia } from "~/server/db/encyclopedia";

// 创建百科
export default defineEventHandler(async (event) => {
  const token = getHeader(event, "Token");

  if (!token) {
    const error = createError({
      statusCode: 401,
      message: "请先登录",
    });
    return sendError(event, error);
  }

  //解析token
  const verify = verifyToken(token);

  if (!verify) {
    const error = createError({
      statusCode: 401,
      message: "请先登录",
    });
    return sendError(event, error);
  }

  const body = await readBody(event);
  return await createEncylopedia(body, verify.user);
});
