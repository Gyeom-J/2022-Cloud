//500개의 user_info 객체 생성
// name값으로 길동1~500까지 랜덤하게 win_count를 0~5까지 생성해서 user_list에 넣어주는 코드
// 500명의 길동1~500 유저가 0~5까지 랜덤하게 승리횟수를 가지고 있음
//6개의 1차원 배열, 혹은 새로운 객체 안에 6개의 배열 생성
// 같은 승리 횟수를 가진 유저끼리 모아주는 코드

function RandomRange(min,max){
    return Math.floor(Math.random() * (++max - min) + min);
}

const user_info = {
    name : "길동",
    win_count : 0,
    MakeRandomWin(){
        this.win_count = RandomRange(0,5);
    }
}

let user_list = [];

for(let i = 0; i < 500 ; i++){
    user_list.push(Object.assign({}, user_info));
    user_list[i].name = "길동" + (i+1);
    user_list[i].MakeRandomWin(); // 1~10까지의 랜덤한 수를 만들어주는 함수
}

let user_list_zero = [];
let user_list_one = [];
let user_list_two = [];
let user_list_three = [];
let user_list_four = [];
let user_list_five = [];

for(let j = 0 ; j < 500; j++){
    if (user_list[j].win_count == 0){
        user_list_zero.push(Object.assign({}, user_info));
    }
    else if(user_list[j].win_count == 1){
        user_list_one.push(Object.assign({}, user_info));
    }
    else if(user_list[j].win_count == 2){
        user_list_two.push(Object.assign({}, user_info));
    }
    else if(user_list[j].win_count == 3){
        user_list_three.push(Object.assign({}, user_info));
    }
    else if(user_list[j].win_count == 4){
        user_list_four.push(Object.assign({}, user_info));
    }
    else{
        user_list_five.push(Object.assign({}, user_info));
    }
}


