import { getProductList } from "~/server/db/product";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { total, list } = await getProductList({ query });
  return {
    list,
    total,
  };
});
