import saveToken from './saveToken';
import getToken from './getToken';

const getNewToken = (token) => (
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
);

const refreshToken = async () => {
    try {
        const token = await getToken();
        if (token === '' || token === 'TOKEN_KHONG_HOP_LE') {
            console.log('Chua co Token');
        }
        const newToken = await getNewToken(token);
        await saveToken(newToken);
    } catch (e) {
        console.log(e);
    }
};

export default refreshToken;
