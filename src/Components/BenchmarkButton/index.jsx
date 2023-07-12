import React, { useState, useEffect } from 'react';

function BenchmarkButton({id}) {
  const [bookmark, setBookmark] = useState(() => {
    const storedBookmark = JSON.parse(localStorage.getItem('bookmark'));
    return storedBookmark || [];
  });

  useEffect(() => {
    console.log(bookmark);
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
  }, [bookmark]);

  const handleClick = () => {
    setBookmark(prevBookmark => {
      prevBookmark = JSON.parse(localStorage.getItem('bookmark'));
      const bookmarkArray = [...prevBookmark];
      const bookmarkIndex = bookmarkArray.indexOf(id);

      if (bookmarkIndex >= 0) {
        bookmarkArray.splice(bookmarkIndex, 1);
      } else {
        bookmarkArray.push(id);
      }

      return bookmarkArray;
    });
  }

  const bookmarkFill = bookmark.includes(id) ? "#8F7DCC" : "#0E0E0E";

  return (
    <div className="bookmark_icon" data-id={id} onClick={handleClick}>
      <svg viewBox="0 0 36 36">
        <path className="filled fill_benchmark" style={{fill: bookmarkFill}} d="M26 6H10V18V30C10 30 17.9746 23.5 18 23.5C18.0254 23.5 26 30 26 30V18V6Z"/>
        <path className="default fill_benchmark" style={{fill: bookmarkFill}} d="M26 6H10V18V30C10 30 17.9746 23.5 18 23.5C18.0254 23.5 26 30 26 30V18V6Z" />
        <path className="corner fill_benchmark" style={{fill: bookmarkFill}} d="M10 6C10 6 14.8758 6 18 6C21.1242 6 26 6 26 6C26 6 26 6 26 6H10C10 6 10 6 10 6Z" />
      </svg>
    </div>
  );
}

export default BenchmarkButton;
