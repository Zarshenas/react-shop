const searchFilterHandler = (query , displayData) => {
    const filteredByCategory = query.category === '0' ||query.category === undefined
    ? displayData
    : displayData.filter(product => product.category.id == +query.category);
  
  // Further filter based on search term
  const filtered = query.search === ""  || query.search === undefined? filteredByCategory : filteredByCategory.filter((product) =>
    product.title.toLowerCase().includes(query.search)
  );
  
  return filtered
};
export default searchFilterHandler;
