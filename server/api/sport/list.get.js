import { getSportList } from "~/server/db/sport";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { total, list } = await getSportList({
    query,
  });
  return {
    list,
    total,
  };
});
