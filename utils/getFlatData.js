
const getFlatData = (apiData) => {
  if (apiData && apiData.pages) {
    const data = apiData.pages?.flatMap((page) =>
      page.data.data ? page.data.data : page
    );


    return data;
  } else {
    return [];
  }
};

export default getFlatData;
