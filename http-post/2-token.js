import http from 'k6/http';
import { check } from 'k6';

export default function () {

    let res = http.post(
        'https://test-api.k6.io/auth/token/login/',
        JSON.stringify(
            {
                username: 'hangocmy',
                password: '12345'
            }
        ),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    const accessToken = res.json().access;
    console.log(accessToken);
}