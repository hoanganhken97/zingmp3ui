const getListProduct = (idType, page) => {
    let url;
    if (idType !== 'COLLECTION') {
        url = `http://10.0.136.37:8080/api/product_by_type.php?id_type=${idType}&page=${page}`;
    } else {
        url = `http://10.0.136.37:8080/api/get_collection.php?page=${page}`;
    }
    return fetch(url)  //eslint-disable-line
    .then(res => res.json());
};

export default getListProduct;
