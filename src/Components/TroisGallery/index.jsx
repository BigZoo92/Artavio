import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import GalleryArtwork from '../GalleryArtwork/GalleryArtwork';
import Filter from '../Filter';
import Artwork from '../Artwork'
import { QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

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
    <article style={{display: sortedArtworkData.length === 0 ? 'flex' : 'grid'}}>
      {sortedArtworkData.length === 0 ? (
        <div className='bookmark_empty'>
          <div className='bookmark_empty_txt'>
            <h2>The Great Empty Canvas</h2>
            <p>Paragraph: Oh dear, it seems your bookmark is empty! A blank canvas awaiting the masterpiece of your creativity. Fear not, for this is just the beginning of your artistic journey. Embrace the vastness of the void and let your imagination run wild. Remember, the greatest artists of all time started with a blank canvas, just like you. So, take a deep breath, grab your tools, and let the magic of inspiration guide you. Your next masterpiece is just a bookmark away.</p>
          </div>
          <QueryClientProvider client={queryClient}>
            <Artwork />
          </QueryClientProvider>
        </div>
      ) : (
        sortedArtworkData.map((artworkThreeArtWork, index) => (
          <GalleryArtwork
            key={index}
            img={artworkThreeArtWork.urls.regular}
            desc={artworkThreeArtWork.alt_description}
            name={artworkThreeArtWork.user.name}
            id={artworkThreeArtWork.id}
          />
        ))
      )}
    </article>
  </section>
);

}

export default TroisGallery;
