import React, { useRef, useState, useEffect } from 'react';
import { useIntersection } from 'react-use';
import BenchmarkButton from '../BenchmarkButton';

function DiscoverExperimental({id, name, desc, img}) {
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
    <div className='suggestion_wrap'>
        <img 
          ref={imageRef}
          src={img} 
          alt={desc} 
          style={{
            animation: isVisible ? 'clipDivHero 1s cubic-bezier(0.75, 0, 0.5, 1)' : 'none',
            opacity: isVisible ? '1' : '0'
          }}
        />
        <h3>{name}</h3>
        <button>
            Add
            <BenchmarkButton id={id} />
        </button>
    </div>
  );
}

export default DiscoverExperimental;
