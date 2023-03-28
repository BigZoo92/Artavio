import React, { useState, useEffect } from 'react';

const fetchArtwork = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=3d&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
  );
  const data = await response.json();
  return data;
};

const Artwork = () => {
  const [artworkData, setArtworkData] = useState(null);

  useEffect(() => {
    const artwork = localStorage.getItem('artwork');
    if (artwork) {
      setArtworkData(JSON.parse(artwork));
    } else {
      fetchArtwork().then(data => {
        setArtworkData(data);
        localStorage.setItem('artwork', JSON.stringify(data));
      });
    }
  }, []);

  if (!artworkData) {
    return <div>Loading...</div>;
  }

  return (
    <section className='discover'>
      <div className='discover_wrap'>
        <img src={artworkData.urls.regular} alt={artworkData.alt_description} />
        <div className='discover_info'>
        <h3>{artworkData?.title}</h3>
          {artworkData.alt_description && <p>{artworkData.alt_description}</p>}
          {artworkData.description && <p>{artworkData.description}</p>}
          <p className='signature'>{artworkData.user.name}</p>
          <button>3D Art</button>
        </div>
      </div>
    </section>
  );
};

export default Artwork;
