const searchProduct = (key) => {
    const url = `http://eotw2012.000webhostapp.com/api/search.php?key=${key}`;
    return fetch(url)  //eslint-disable-line
    .then(res => res.json());
};

export default searchProduct;
