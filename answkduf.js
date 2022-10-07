const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const url_data = url.parse(req.url, true);

    if(url_data.pathname == '/'){
        res.write('hello');
        res.end();
    }
    else if(url_data.pathame == '/login'){
        let user_id = url_data.query.ud;
        let password = url_data.query.password;

        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('id = ' + user_id + '<br>');
        res.write('password = ' + password);
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