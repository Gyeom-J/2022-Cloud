/* Sample3_function 폴더에 draw.js */

/* 기본적인 방법 */
function DrawMessage(){
	console.log("Welcome");
};
// 위에 선언한 함수를 exports
module.exports.DrawMessage = DrawMessage;

//무기명 함수
module.exports.HelloMessage = function(){
	console.log("Hello");
};

//람다식 무기명 선언
module.exports.ExitMessage = () => {
	console.log("Good Bye");
}

//람다식선언
module.exports.WellCome = () => console.log("WellCome");