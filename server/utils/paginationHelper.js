// 快速帮助获取分页信息, 用于分页查询
export default function (event) {
  const query = getQuery(event);
  const limit = parseInt(query.limit || "10");
  const page = parseInt(query.page || "1");
  return {
    take: limit,
    skip: limit * (page - 1),
  };
}
