import { getSportList } from "~/server/db/sport";

export default defineEventHandler(async (event) => {
  const pagination = paginationHelper(event);
  const { total, list } = await getSportList({
    pagination,
  });
  return {
    list,
    total,
  };
});
