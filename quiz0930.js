//더하기 예시) localhost:8080/add?value1=30&value2=50
//localhost:8080/add 더하기
//localhost:8080/sub 빼기

//입력하면 value1 값과 value2값을 계산해서 화면에 보여주는 코드 작성해보기
//계산하는 함수는 모듈 익스포트해서 다른 파일에 있어야함.

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const url_data = url.parse(req.url, true);

    if(url_data.pathname == '/add'){
        const add = require('../22.09.30/add');
        add.Add();
        res.write();
        res.end();
    }
    else if(url_data.pathame == '/sub'){
        const sub = require('../22.09.30/sub');
        sub.Sub();
        res.write();
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('페이지를 찾을 수  없습니다');
        res.end();
    }
}).listen(8080, () => {
    console.log('8080port에서 연결')
})