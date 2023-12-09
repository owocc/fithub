export default function () {
  const viewSport = (id) => {
    useRouter().push("/sport/" + id);
  };
  return {
    viewSport,
  };
}
