import URL from "../constants";

export async function fetchData(playlistId, setItems, setLoading, setIsSearch) {
  const req = URL + `${playlistId}/`;
  try {
    const res = await fetch(req, { method: "get" });
    const data = await res.json();
    console.log(data);

    setItems(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
    setIsSearch(false);
  }
}
