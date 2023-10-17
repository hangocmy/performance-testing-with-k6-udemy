import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        {
            duration: '2m',
            target: 10000 //VUs
        },
        {
            duration: '1m',
            target: 0 //VUs
        }
    ]
}

export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}