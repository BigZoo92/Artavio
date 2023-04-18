const fetchBookmark = async () => {
  const bookmarkIds = JSON.parse(localStorage.getItem("bookmark")); 
  const dataAll = JSON.parse(localStorage.getItem("artworkThreeArt")); 
  const filteredData = dataAll.filter((item) => bookmarkIds.includes(item.id));
  return filteredData;
};

export default fetchBookmark;