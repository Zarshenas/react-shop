const useSearchProduct = (searchString , data) => {
    const searchResult =  data.filter((product) =>{
        if ( product.title.toLowerCase().includes(searchString)) {
            return product
        }
    })
    return searchResult;
}
export default useSearchProduct;