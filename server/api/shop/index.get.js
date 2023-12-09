import { getProductListByPage } from "~/server/db/product";

export default defineEventHandler(async (event) => {
  const pagination = paginationHelper(event);
  const { total, list } = await getProductListByPage({
    pagination,
  });
  return {
    list,
    total,
  };
});
