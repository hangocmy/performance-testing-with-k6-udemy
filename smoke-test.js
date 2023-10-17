import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '30s'
}

export default function () {
    http.get('http://test.k6.io');
    sleep(1);

    http.get('http://test.k6.io/contacts.php');
    sleep(2);

    http.get('http://test.k6.io/news.php');
    sleep(2);
}

/*
A smoke test is not a performance test.
This is enough to understand if it is working or not.
So we have used a smoke test here just to test our code and the application to see if everything is up and running.
*/