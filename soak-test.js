import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        {
            duration: '5m',
            target: 1000 //VUs
        },
        {
            duration: '24h',
            target: 1000 //VUs
        },
        {
            duration: '5m',
            target: 0 //VUs
        }
    ]
}

export default function () {
    http.get('http://test.k6.io');
    sleep(1);

    http.get('http://test.k6.io/contacts.php');
    sleep(2);

    http.get('http://test.k6.io/news.php');
    sleep(2);
}