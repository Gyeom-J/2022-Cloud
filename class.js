class userInfo{
    name = "hi";
    age = 22;
    game_money = 0;

    constructor(name,age){ // 클래스가 생성될 때 호출되는 함수 인자 값이 없어도 됨
        this.name = name; // name 값을 인자로 받아서 자기 자신의 name 변수에 대입
        this.age = age; // age 값을 인자로 받아서 자기자신의 age에 할당
        this.game_money = 0; //game_money 값 0 으로 초기화
    };

    DrawName(){ // draw method 추가
        console.log(this.name); //name 값을 출력
    }

    DrawAll(){
        console.log(this.name, this.age, this.game_money)
    }
}

let user_info = new userInfo("길동",25);
let user_info2 = new userInfo("길동2세",10);

console.log(user_info); //userInfo { name: '길동', age: 25, game_money : 0 }
console.log(user_info2); //userInfo { name: '길동2세', age: 10, game_money : 0 }
user_info.DrawAll(); // 길동 25 0
user_info2.DrawAll(); // 길동2세 10 0