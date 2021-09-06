export async function fetchData(playlistId, setItems, setLoading, setIsSearch) {
  const req = `https://matthewmorrison-server.website/playlist/${playlistId}/`;
  try {
    const res = await fetch(req);
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
