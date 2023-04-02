import React, { useState, useEffect } from 'react';
import DiscoverExperimental from '../DiscoverExperimental';

const fetchArtwork = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=3d&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
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

  if (!artworkData || !artworksExperimental) {
    return <div>Loading...</div>;
  }

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
      <h2>Experimental <b>Art</b></h2>
      <div className='suggestion_cd'>
        {artworksExperimental.map((artworkExperimental, index) => (
          <DiscoverExperimental key={index} id={artworkExperimental.id} name={artworkExperimental.user.name} desc={artworkExperimental.alt_description} img={artworkExperimental.urls.regular}/>
        ))}
      </div>
      </section>
      </React.Fragment>
  );
};

export default Artwork;
