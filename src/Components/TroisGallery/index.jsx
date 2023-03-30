import React, { useState, useEffect } from 'react';

const fetchThreeArt = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=3d&count=100&client_id=VDtUKQt4G1bdWXHoJuUFCDe68SeWFDrfCsC3w0u-31U"
  );
  const data = await response.json();
  return data;
};


function TroisGallery() {
    const [artworkThreeArtData, setArtworkThreeArtData] = useState(null);

  useEffect(() => {
    const artworkThreeArt = localStorage.getItem('artworkThreeArt');
    if (artworkThreeArt) {
      setArtworkThreeArtData(JSON.parse(artworkThreeArt));
    } else {
      fetchThreeArt().then(data => {
        setArtworkThreeArtData(data);
        localStorage.setItem('artworkThreeArt', JSON.stringify(data));
      });
    }

  }, []);

  if (!artworkThreeArtData) {
    return <div>Loading...</div>;
  }
  console.log(artworkThreeArtData);
    return (
        <section className='trois_gallery_cd'>
            <article>
                {artworkThreeArtData.map((artworkThreeArtWork, index) => (
                <div className='trois_gallery_img' key={index}>
                    <img src={artworkThreeArtWork.urls.regular} alt={artworkThreeArtWork.alt_description} />
                    <div className='trois_images_info'>
                        <div>
                            <p>{artworkThreeArtWork.user.name}</p>
                        </div>
                        <div></div>
                    </div>
                </div>
                ))}
            </article>
        </section>
    )
}

export default TroisGallery