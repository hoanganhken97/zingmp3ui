const initData = () => (
    fetch('http://10.0.136.37:8080/api') //eslint-disable-line
    .then(res => res.json())
);

export default initData;
