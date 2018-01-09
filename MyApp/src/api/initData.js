const initData = () => (
    fetch('http://eotw2012.000webhostapp.com/api') //eslint-disable-line
    .then(res => res.json())
);

export default initData;
