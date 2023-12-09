import { getProductList } from "~/server/db/product";

export default defineEventHandler(async (event) => {
  const pagination = paginationHelper(event);
  const { total, list } = await getProductList({
    pagination,
  });
  return {
    list,
    total,
  };
});
