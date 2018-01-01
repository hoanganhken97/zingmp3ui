const sendOrder = (token, arrayDetail) => (
    fetch('http://10.0.136.37:8080/api/cart.php', //eslint-disable-line
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accep: 'application/json'
        },
        body: JSON.stringify({ token, arrayDetail })
    })
    .then(res => res.text())
);

module.exports = sendOrder;
