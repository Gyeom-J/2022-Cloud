const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Node.js로 서버 만들기</h1>');
    res.end('<p>3장 http 모듈 공부 중입니다.</p>')
})

    .listen(8080);

/* Listening Event Listener */
server.on('listening', () => {
    consolee.log('8080port server connecting...');
});

/* Error Event Listener */

server.on('error', () => {
    console.error(error);
})

const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    console.log(res);
})

    .listen(8080, () => {
        console.log('8080port에서 서버 연결')
    })