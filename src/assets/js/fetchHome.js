const fetchThree = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=3d&count=3&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
  );
  const data = await response.json();
  return data;
};

const fetchExp = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=experimental&count=3&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
  );
  const data = await response.json();
  return data;
};

const fetchHero = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=3d,experimental&count=2&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
  );
  const data = await response.json();
  return data;
};


export {fetchThree, fetchExp, fetchHero};