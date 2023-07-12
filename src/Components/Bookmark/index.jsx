import React, { useState, useEffect } from 'react';
import fetchArt from '../../assets/js/fetchArt';
import GalleryArtwork from '../GalleryArtwork/GalleryArtwork';
import Filter from '../Filter';

function TroisGallery() {
  const [artworkThreeArtData, setArtworkThreeArtData] = useState(null);
  const [artworkAllData, setArtworkAllData] = useState(null);
  const [selectTri, setSelectTri] = useState(null);
  const [sortedArtworkData, setSortedArtworkData] = useState(null);

  function updateSetTri(sortValue) {
    setSelectTri(sortValue);
  }
  
  useEffect(() => {
    const artworkThreeArt = localStorage.getItem('artworkThreeArt');
    if (artworkThreeArt) {
      setArtworkThreeArtData(JSON.parse(artworkThreeArt));
      setArtworkAllData(JSON.parse(artworkThreeArt));
      setSortedArtworkData(JSON.parse(artworkThreeArt));
    } else {
      fetchArt().then(data => {
        setArtworkThreeArtData(data);
        setArtworkAllData(data);
        setSortedArtworkData(data);
        localStorage.setItem('artworkThreeArt', JSON.stringify(data));
      });
    }
  }, []);
  fetchArt().then(data => {
        setArtworkThreeArtData(data);
        setArtworkAllData(data);
        setSortedArtworkData(data);
        localStorage.setItem('artworkThreeArt', JSON.stringify(data));
      });

  useEffect(() => {
   
    if (selectTri === 0) {
      const artworkOldestFirst = artworkThreeArtData.sort((a, b) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return dateA - dateB;
      })
      setSortedArtworkData(artworkOldestFirst);
    } else if (selectTri === null) {
      setSortedArtworkData(artworkAllData);
    }else if (selectTri === 1) {
      const artworkNewestFirst = artworkThreeArtData.sort((a, b) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return dateB - dateA;
      })
      setSortedArtworkData(artworkNewestFirst);
    }else if (selectTri === 2) {
      const artworkLike = artworkThreeArtData.sort((a, b) => {
        const dateA = parseInt(a.likes)
        const dateB = parseInt(b.likes)
        return dateB - dateA;
      })
      setSortedArtworkData(artworkLike);
    }
  }, [selectTri, artworkAllData, artworkThreeArtData]);

  if (!sortedArtworkData) {
    return <div>Loading...</div>;
  }

  return (
    <section className='trois_gallery_cd'>
      <Filter updateSetTri={updateSetTri} />
      <article>
        {sortedArtworkData.map((artworkThreeArtWork, index) => (
          <GalleryArtwork  key={index} img={artworkThreeArtWork.urls.regular} desc={artworkThreeArtWork.alt_description} name={artworkThreeArtWork.user.name} id={artworkThreeArtWork.id} />
        ))}
      </article>
    </section>
  );
}

export default TroisGallery;
