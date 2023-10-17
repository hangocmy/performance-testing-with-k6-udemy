import http from "k6/http";
import { check, sleep } from "k6";
import exec from "k6/execution";

export const options = {
    vus: 10,
    duration: '10s',

    //setting threshold
    thresholds: {
        http_req_duration: ['p(95)<800'],
        http_req_duration: ['max<2000'],
        http_req_failed: ['rate<0.01'],
        http_reqs: ['count>20'],
        http_reqs: ['rate>4'],
        vus: ['value>9'],
        checks: ['rate>=0.98']
    }
}


export default function(){
    //const res = http.get('http://test.k6.io' + (exec.scenario.iterationInTest === 1 ? 'foo': ''));
    const res = http.get('http://test.k6.io' + (exec.scenario.iterationInTest) === 1);


    console.log(exec.scenario.iterationInTest);

    //1.
    //console.log(res.status);
    //console.log(res.body);


    //2.
    //check(true, {
    //    'true is true': (value) => value === true
    //});


    //3.
    //check(res, {
    //    'status is 200': (r) => r.status === 200
    //});
    //check(res, {
    //    'page is startpage': (r) => r.body.includes('Collection of simple web-pages suitable for load testing.')
    //});


    //4.
    check(res, {
        'status is 200': (r) => r.status === 200,
        'page is startpage': (r) => r.body.includes('Collection of simple web-pages suitable for load testing.')
    });
    sleep(2);
}