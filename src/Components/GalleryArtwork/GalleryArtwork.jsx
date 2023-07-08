import React, { useRef, useState, useEffect } from 'react';
import { useIntersection } from 'react-use';
import BenchmarkButton from '../BenchmarkButton';


function GalleryArtwork({img, desc, name, id}) {
  const imageRef = useRef(null);
  const intersection = useIntersection(imageRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0) {
      setIsVisible(true);
    }
  }, [intersection]);
  return (
    <div 
      className='trois_gallery_img' 
      ref={imageRef} 
      style={{
        animation: isVisible ? 'clipDivHero 1s cubic-bezier(0.75, 0, 0.5, 1)' : 'none',
        opacity: isVisible ? '1' : '0'
      }}
    >
        <img
          src={img} 
          alt={desc} 
        />
        <div className='trois_images_info'>
            <div>
                <p>{name}</p>
                <BenchmarkButton id={id} />
            </div>
            <div></div>
        </div>
    </div>
  );
}

export default GalleryArtwork;
