const getListProduct = (idType, page) => {
    const url = `http://10.0.136.37:8080/api/product_by_type.php?id_type=${idType}&page=${page}`;
    return fetch(url)  //eslint-disable-line
    .then(res => res.json());
};

export default getListProduct;
