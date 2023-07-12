import { fetchHero } from '../../assets/js/fetchHome';
import { useState, useEffect } from 'react';
import MiniTriRing from '../MiniTriRing'



function HeroHome() {
  const [artworkHero, setArtworkHero] = useState(JSON.parse(localStorage.getItem('artworkHero')));

  useEffect(() => {
    console.log(artworkHero);
    if (artworkHero) {
      return
    } else {
      fetchHero().then(data => {  
        setArtworkHero(data);
        localStorage.setItem('artworkHero', JSON.stringify(data));
      });
    }
    
  }, [artworkHero]);
  


  return (
    <section className='hero'>
      {artworkHero ? (artworkHero.map((artworksHero, index) => (
        <div className='imgHero' key={index}>
          <img src={artworksHero.urls.regular} title={artworksHero.user.name} alt={artworksHero.alt_description} />
        </div>
      ))) : <></>}
      <MiniTriRing></MiniTriRing>
      <h1>
        <b>Art</b>
        <i>Awakens</i>
        <span>your creativity</span>
        <span>to dream</span>
      </h1>
        
    </section>
  );
}

export default HeroHome;

