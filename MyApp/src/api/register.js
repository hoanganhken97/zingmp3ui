const register = (email, name, password) => (
    fetch('http://eotw2012.000webhostapp.com/api/register.php',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accep: 'application/json'
        },
        body: JSON.stringify({ email, name, password })
    })
    .then(res => res.text())
);

module.exports = register;
