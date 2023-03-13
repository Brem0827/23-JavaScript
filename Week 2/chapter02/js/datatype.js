let data = 5;
typeof(data);
typeof(10); // 숫자형
typeof("10"); // 문자형
typeof(3.145); // 숫자형
typeof("안녕하세요"); // 문자형
typeof(""); // 문자형

console.log('I\'m studying now.');
console.log('탭 \t 포함 ');
// 연결 연산자 사용
let name = "도레미";
let classroom = 201;
console.log(name + "님, " + classroom + "호 강의실로 입장하세요.");
// 템플릿 리터럴 사용
name = "백두산";
classroom = 205;
console.log(`${name}님, ${classroom}호 강의실로 입장하세요`);

let userName;
console.log(userName); // undefined