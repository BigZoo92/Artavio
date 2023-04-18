import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import GalleryArtwork from '../GalleryArtwork/GalleryArtwork';
import Filter from '../Filter';

function TroisGallery({datafetchArt}) {
  const location = useLocation();
  // eslint-disable-next-line
  const [artworkThreeArtData, setArtworkThreeArtData] = useState(null);
  const [artworkAllData, setArtworkAllData] = useState(null);
  const [selectTri, setSelectTri] = useState(null);
  const [sortedArtworkData, setSortedArtworkData] = useState(null);

  function updateSetTri(sortValue) {
    setSelectTri(sortValue);
  }
  
  useEffect(() => {
    let artworkThreeArt = false
    if (location.pathname === "/3d_art") {
      artworkThreeArt = localStorage.getItem('artworkThreeArt');
      console.log(JSON.parse(artworkThreeArt));
    } else if (location.pathname === "/bookmark") {
      artworkThreeArt = localStorage.getItem('bookmarkData');
      
    }
    if (artworkThreeArt) {
      setArtworkThreeArtData(JSON.parse(artworkThreeArt));
      setArtworkAllData(JSON.parse(artworkThreeArt));
      setSortedArtworkData(JSON.parse(artworkThreeArt));
    } else {
      datafetchArt.then(data => {
        setArtworkThreeArtData(data);
        setArtworkAllData(data);
        setSortedArtworkData(data);
        if (location.pathname === "/3d_art") {
          localStorage.setItem('artworkThreeArt', JSON.stringify(data));
        } else if (location.pathname === "/bookmark") {
          localStorage.setItem('bookmarkData', JSON.stringify(data));
        }
        
      });
    }
    console.log(JSON.parse(artworkThreeArt));
  }, [datafetchArt, location.pathname]);

  useEffect(() => {
  if (selectTri === 0) {
    const artworkOldestFirst = sortedArtworkData.sort((a, b) => {
      const dateA = new Date(a.created_at)
      const dateB = new Date(b.created_at)
      return dateA - dateB;
    })
    setSortedArtworkData(artworkOldestFirst);
  } else if (selectTri === null) {
    setSortedArtworkData(artworkAllData);
  } else if (selectTri === 1) {
    const artworkNewestFirst = sortedArtworkData.sort((a, b) => {
      const dateA = new Date(a.created_at)
      const dateB = new Date(b.created_at)
      return dateB - dateA;
    })
    setSortedArtworkData(artworkNewestFirst);
  } else if (selectTri === 2) {
    const artworkLike = sortedArtworkData.sort((a, b) => {
      const dateA = parseInt(a.likes)
      const dateB = parseInt(b.likes)
      return dateB - dateA;
    })
    setSortedArtworkData(artworkLike);
  }
}, [selectTri, setSortedArtworkData, artworkAllData, sortedArtworkData]);

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
