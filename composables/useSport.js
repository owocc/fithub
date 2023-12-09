export default function () {
  const viewSport = (id) => {
    const router = useRouter();
    router.push("/sport/" + id);
  };
  return {
    viewSport,
  };
}
