import React, { useState, useEffect } from 'react';
import fetchArt from '../../assets/js/fetchArt';
import GalleryArtwork from '../GalleryArtwork/GalleryArtwork';
import Filter from '../Filter';

function TroisGallery() {
  const [artworkThreeArtData, setArtworkThreeArtData] = useState(null);

  useEffect(() => {
    const artworkThreeArt = localStorage.getItem('artworkThreeArt');
    if (artworkThreeArt) {
      setArtworkThreeArtData(JSON.parse(artworkThreeArt));
    } else {
      fetchArt().then(data => {
        setArtworkThreeArtData(data);
        localStorage.setItem('artworkThreeArt', JSON.stringify(data));
      });
    }
  }, []);

  if (!artworkThreeArtData) {
    return <div>Loading...</div>;
  }
  return (
    <section className='trois_gallery_cd'>
      <Filter />
      <article>
        {artworkThreeArtData.map((artworkThreeArtWork, index) => (
          <GalleryArtwork  key={index} img={artworkThreeArtWork.urls.regular} desc={artworkThreeArtWork.alt_description} name={artworkThreeArtWork.user.name} id={artworkThreeArtWork.id} />
        ))}
      </article>
    </section>
  );
}

export default TroisGallery;
