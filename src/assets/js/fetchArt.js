const fetchArt = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=3d,experimental&count=100&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
  );
  const data = await response.json();
  return data;
};

export default fetchArt;