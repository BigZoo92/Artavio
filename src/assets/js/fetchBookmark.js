const fetchBookmark = async () => {
  const bookmarkIds = JSON.parse(localStorage.getItem("bookmark")); 
  const dataAll = {
    artworkThreeArt: JSON.parse(localStorage.getItem("artworkThreeArt")),
    artworkHero: JSON.parse(localStorage.getItem("artworkHero")),
    artworkThree: JSON.parse(localStorage.getItem("artworkThree")),
    artworkExp: JSON.parse(localStorage.getItem("artworkExp")),
  };

  const allArtworks = Object.values(dataAll).reduce((acc, data) => {
    if (Array.isArray(data)) {
      acc.push(...data);
    }
    return acc;
  }, []);

  if (allArtworks.length > 0) {
    const filteredData = allArtworks.filter((item) => bookmarkIds.includes(item.id));
    return filteredData;
  } else {
    return null;
  }
};

export default fetchBookmark;
