import { fetchHero } from '../../assets/js/fetchHome';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'


function HeroHome() {
  const [artworkHero, setArtworkHero] = useState(JSON.parse(localStorage.getItem('artworkHero')));
  const imagesRef = useRef([]);
  const canvasRef = useRef(null);

   const textureLoader = new THREE.TextureLoader();
const alphaMapTexture = textureLoader.load('../../assets/Images/jpg/crystal_map.jpg');

  useEffect(() => {
    console.log('wesh');
    const artHero = localStorage.getItem('artworkHero');
    if (artHero) {
      setArtworkHero(JSON.parse(artHero));
    } else {
      fetchHero().then(data => {  
        setArtworkHero(data);
        localStorage.setItem('artworkHero', JSON.stringify(data));
      });
    }
  }, []);

  return (
    <section className='hero'>
      {artworkHero.map((artworksHero, index) => (
        <div className='imgHero' key={index} ref={el => imagesRef.current[index] = el}>
          <img src={artworksHero.urls.regular} title={artworksHero.user.name} alt={artworksHero.alt_description} />
        </div>
      ))}
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

