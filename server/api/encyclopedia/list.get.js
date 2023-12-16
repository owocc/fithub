import { getEncyclopediaList } from "../../db/encyclopedia";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { list, total } = await getEncyclopediaList({
    query: {
      title: query?.title,
      limit: query.limit && parseInt(query.limit),
    },
    userId: query.userId && parseInt(query.userId),
  });

  return {
    list,
    total,
  };
});
