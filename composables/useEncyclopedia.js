export default function () {
  const viewDetail = (id) => {
    useRouter().push("/encyclopedia/" + id);
  };
  return {
    viewDetail,
  };
}
