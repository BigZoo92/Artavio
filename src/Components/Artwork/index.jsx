import React, { useState, useEffect} from 'react';
import DiscoverExperimental from '../DiscoverExperimental';
import {fetchThree, fetchExp} from '../../assets/js/fetchHome'


const Artwork = () => {
  const [artworkThree, setArtworkThree] = useState(null);
  const [artworkExp, setArtworkExp] = useState(null);
  
  useEffect(() => {
    const artwork = localStorage.getItem('artworkThree');
    if (artwork) {
      setArtworkThree(JSON.parse(artwork));
    } else {
      fetchThree().then(data => {
        setArtworkThree(data);
        localStorage.setItem('artworkThree', JSON.stringify(data));
      });
    }

    const experimental = localStorage.getItem('artworkExp');
    if (experimental) {
      setArtworkExp(JSON.parse(experimental));
    } else {
      fetchExp().then(data => {
        setArtworkExp(data);
        localStorage.setItem('artworkExp', JSON.stringify(data));
      });
    }


  }, []);


  if (!artworkThree || !artworkExp) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
    <section className='suggestion'>
      <h2>3D <b>Art</b></h2>
      <div className='suggestion_cd'>
        {artworkThree.map((artworkThree, index) => (
          <DiscoverExperimental key={index} id={artworkThree.id} name={artworkThree.user.name} desc={artworkThree.alt_description} img={artworkThree.urls.regular}/>
        ))}
      </div>
      <h2>Experimental <b>Art</b></h2>
      <div className='suggestion_cd'>
        {artworkExp.map((artworkExperimental, index) => (
          <DiscoverExperimental key={index} id={artworkExperimental.id} name={artworkExperimental.user.name} desc={artworkExperimental.alt_description} img={artworkExperimental.urls.regular}/>
        ))}
      </div>
      </section>
      </React.Fragment>
  );
};

export default Artwork;
