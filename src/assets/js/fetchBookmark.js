const fetchBookmark = async () => {
  const bookmarkIds = JSON.parse(localStorage.getItem("bookmark")); 
  const dataAll = JSON.parse(localStorage.getItem("artworkThreeArt")); 
  if (dataAll) {
    const filteredData = dataAll.filter((item) => bookmarkIds.includes(item.id));
    return filteredData;
  }else{
    return null
  }
  
};

export default fetchBookmark;