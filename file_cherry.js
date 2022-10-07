const fs = require('fs').promises;

fs.writeFile('./toy.txt','텍스트 문서가 없다면 생성, 하이')
    .then(() => {
        return fs.readFile('./toy.txt');
    })

    .then((data) => {
        console.log(data.toString());
    })

    .catch ((err) => {
        throw err;
    });