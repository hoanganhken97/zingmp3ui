const sendOrder = (token, arrayDetail) => (
    fetch('http://eotw2012.000webhostapp.com/api/cart.php', //eslint-disable-line
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
