const searchProduct = (key) => {
    const url = `http://10.0.136.37:8080/api/search.php?key=${key}`;
    return fetch(url)  //eslint-disable-line
    .then(res => res.json());
};

export default searchProduct;
