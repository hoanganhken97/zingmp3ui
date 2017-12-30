import saveToken from './saveToken';

const refreshToken = (token) => {
    fetch('http://10.0.136.37:8080/api/refresh_token.php', //eslint-disable-line
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accep: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.text())
    .then(sToken => saveToken(sToken));
};

export default refreshToken;
