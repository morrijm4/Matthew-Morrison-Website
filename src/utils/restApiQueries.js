export async function fetchData(playlistId, setItems, setLoading, setIsSearch) {
  const URL = `https://hello.loca.lt/playlist/${playlistId}/`;
  try {
    const res = await fetch(URL, { method: "get" });
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
