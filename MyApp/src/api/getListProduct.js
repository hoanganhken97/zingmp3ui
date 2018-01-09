const getListProduct = (idType, page) => {
    let url;
    if (idType !== 'COLLECTION') {
        url = `http://eotw2012.000webhostapp.com/api/product_by_type.php?id_type=${idType}&page=${page}`;
    } else {
        url = `http://eotw2012.000webhostapp.com/api/get_collection.php?page=${page}`;
    }
    return fetch(url)  //eslint-disable-line
    .then(res => res.json());
};

export default getListProduct;
