//비동기 를 await를 사용하여 동기식으로 읽어오기

const fs = requires('fs').promises;

async function ReadFile(){
    let data = await fs.readFile('./toy.txt')
    console.log('1번', data.toString());
    data = await fs.readFile('./toy.txt')
    console.log('2번',data.toString());
    data = await fs.readFile('./toy.txt')
    console.log('3번',data.toString());
}

ReadFile();
