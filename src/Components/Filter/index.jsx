import { BiArrowBack, BiFilter } from 'react-icons/bi';
import { useRef, useEffect, useState } from 'react';

function Filter() {
  const filterRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [initialPosition, setInitialPosition] = useState(0);
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const [selectedSort, setSelectedSort] = useState(null);

  const handleFilterIconClick = () => {
    setIsAsideOpen(!isAsideOpen);
};

  const handleSortItemClick = (index) => {
    setSelectedSort(index);
  }

  useEffect(() => {
    const handleScroll = () => {
        const elementOffsetTop = filterRef.current.offsetTop;
        const elementHeight = filterRef.current.offsetHeight;
        setIsFixed(window.pageYOffset >= elementOffsetTop + elementHeight);
    };

    setInitialPosition(filterRef.current.offsetTop);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop <= initialPosition) {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialPosition]);
  

  return (
    <aside 
      className={`filter ${isFixed ? 'fixed' : ''}`} 
      ref={filterRef} 
      style={{left: isAsideOpen ? 'var(--left-aside-close)' : '0'}}
    >
      <div 
        className='filter_icon' 
        onClick={handleFilterIconClick} 
      >
        <BiArrowBack />
        <BiFilter />
      </div>
      <div 
        className='filter_input' 
        onClick={() => handleSortItemClick(0)}
        style={{pointerEvents: isAsideOpen ? 'none' : 'all'}}
      >
        <p>Oldest first</p>
        <span 
          className='input_radio'
          style={{backgroundColor: selectedSort === 0 ? '#91fdad' : '#0E0E0E'}}
        ></span>
      </div>
      <div 
        className='filter_input' 
        onClick={() => handleSortItemClick(1)}
        style={{pointerEvents: isAsideOpen ? 'none' : 'all'}}
      >
        <p>Newest first</p>
        <span 
          className='input_radio'
          style={{backgroundColor: selectedSort === 1 ? '#91fdad' : '#0E0E0E'}}
        ></span>
      </div>
      <div 
        className='filter_input' 
        onClick={() => handleSortItemClick(2)}
        style={{pointerEvents: isAsideOpen ? 'none' : 'all'}}
      >
        <p>Sort by download</p>
        <span 
          className='input_radio'
          style={{backgroundColor: selectedSort === 2 ? '#91fdad' : '#0E0E0E'}}
        ></span>
      </div>
      <div 
        className='filter_input' 
        onClick={() => handleSortItemClick(3)}
        style={{pointerEvents: isAsideOpen ? 'none' : 'all'}}
      >
        <p>Sort by like</p>
        <span 
          className='input_radio'
          style={{backgroundColor: selectedSort === 3 ? '#91fdad' : '#0E0E0E'}}
        ></span>
      </div>
      <div 
        className='filter_input' 
        onClick={() => handleSortItemClick(4)}
        style={{pointerEvents: isAsideOpen ? 'none' : 'all'}}
      >
        <p>Sort by view</p>
        <span 
          className='input_radio'
          style={{backgroundColor: selectedSort === 4 ? '#91fdad' : '#0E0E0E'}}
        ></span>
      </div>
    </aside>
  );
}

export default Filter;
