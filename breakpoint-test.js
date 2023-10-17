import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000 //VUs
        }
    ]
}

export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}