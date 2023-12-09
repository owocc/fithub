export default function () {
  const viewDetail = (id) => {
    const router = useRouter();
    router.push("/encyclopedia/" + id);
  };
  return {
    viewDetail,
  };
}
