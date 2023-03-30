import React, { useState, useEffect } from 'react';

const fetchArtwork = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=3d&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
  );
  const data = await response.json();
  return data;
};

const fetchArtworksArtsCulture = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=arts%20and%20culture&count=3&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
  );
  const data = await response.json();
  return data;
};

const fetchArtworksExperimental = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=experimental&count=3&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
  );
  const data = await response.json();
  return data;
};

const Artwork = () => {
  const [artworkData, setArtworkData] = useState(null);
  const [artworksArtsCulture, setArtworksArtsCulture] = useState(null);
  const [artworksExperimental, setArtworksExperimental] = useState(null);

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

    const artsCulture = localStorage.getItem('artsCulture');
    if (artsCulture) {
      setArtworksArtsCulture(JSON.parse(artsCulture));
    } else {
      fetchArtworksArtsCulture().then(data => {
        setArtworksArtsCulture(data);
        localStorage.setItem('artsCulture', JSON.stringify(data));
      });
    }

    const experimental = localStorage.getItem('experimental');
    if (experimental) {
      setArtworksExperimental(JSON.parse(experimental));
    } else {
      fetchArtworksExperimental().then(data => {
        setArtworksExperimental(data);
        localStorage.setItem('experimental', JSON.stringify(data));
      });
    }
  }, []);

  if (!artworkData || !artworksArtsCulture || !artworksExperimental) {
    return <div>Loading...</div>;
  }
  console.log(artworksArtsCulture[0]);
  return (
    <React.Fragment>
    <section className='discover3d'>
      <div className='discover3d_wrap'>
          <img src={artworkData.urls.regular} alt={artworkData.alt_description} />
          <div className='discover3d_info'>
            <h3>{artworkData?.title}</h3>
            {artworkData.alt_description && <p>{artworkData.alt_description}</p>}
          {artworkData.description && <p>{artworkData.description}</p>}
          <p className='signature'>{artworkData.user.name}</p>
          <button>3D Art</button>
      </div>
      </div>
    </section>
    <section className='suggestion'>
      <h2>Cultural <b>Art</b></h2>
      <div className='suggestion_cd'>
        {artworksArtsCulture.map((artworkArtsCulture, index) => (
        <div key={index} className='suggestion_wrap'>
          <img src={artworkArtsCulture.urls.regular} alt={artworkArtsCulture.alt_description} />
            <h3>{artworkArtsCulture.user.name}</h3>
            <button>Discover</button>
          </div>
        ))}
      </div>
      <h2>Experimental <b>Art</b></h2>
      <div className='suggestion_cd'>
        {artworksExperimental.map((artworkExperimental, index) => (
        <div key={index} className='suggestion_wrap'>
          <img src={artworkExperimental.urls.regular} alt={artworkExperimental.alt_description} />
            <h3>{artworkExperimental.user.name}</h3>
            <button>Discover</button>
          </div>
        ))}
      </div>
      </section>
      </React.Fragment>
  );
};

export default Artwork;
