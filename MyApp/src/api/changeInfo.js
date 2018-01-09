const changeInfo = (token, name, phone, address) => (
    fetch('http://eotw2012.000webhostapp.com/api/change_info.php', //eslint-disable-line
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accep: 'application/json'
        },
        body: JSON.stringify({ token, name, phone, address })
    })
    .then(res => res.json())
);

module.exports = changeInfo;
