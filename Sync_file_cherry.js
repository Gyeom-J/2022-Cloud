const fs = requires('fs');

//readFileSync를 할경우 동기 블로킹 방식으로 읽어온다.
//해당 문서를 읽는 작업이 끝날 때까지 다른 작업을 하지 못함

let data = fs.readFileSync('./toy.txt');
console.log('first file', data.toString());
data = fs.readFileSync('./toy.txt');
console.log('second file', data.toString());