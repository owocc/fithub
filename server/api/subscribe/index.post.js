import { addSubscribe } from "~/server/db/subscribe";

export default defineEventHandler(async (evnet) => {
  const { mail } = await readBody(evnet);
  return await addSubscribe(mail);
});
