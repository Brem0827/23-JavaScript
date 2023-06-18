<!-- header 영역 -->
<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">201930324 이현종</h2>
 <p align="center">📖 웹 애플리케이션 전공</p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>&nbsp 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=Windows&logoColor=white"/></a></br>
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"></a>&nbsp
</p>

[![Solved.ac 프로필](http://mazassumnida.wtf/api/v2/generate_badge?boj=guswhd284)](https://www.acmicpc.net/user/guswhd284)

<!-- main 영역 -->
<!-- 제출 이메일 : dhcho6209@gmail.com -->

1. [📝1주차](#1주차)
2. [📝2주차](#2주차)
3. [📝3주차](#3주차)
4. [📝4주차](#4주차)
5. [📝5주차](#5주차)
6. [📝6주차](#6주차)
7. [📝7주차](#7주차)
8. [📝10주차](#10주차)
9. [📝11주차](#11주차)
10. [📝12주차](#12주차)
11. [📝13주차](#13주차)
12. [📝14주차](#14주차)
13. [📝15주차](#15주차)

# 15주차(시험 전 보강)

## 📝 기말고사 대비

<details><summary>📘 기말 정리 </summary>

  <details><summary>📖 기말고사 </summary>

  * 객관식 10문항, 주관식 5문항 출제
  * 주관식은 중간고사 보다 난이도가 낮으며 3줄이내로 끝낼수있는 문제
  * 문자열 관련, 길이, 문자열에서 찾아내는 것, 문자열 추출, 정규 표현식(기본), 문자열을 배열로 변환 및 배열을 문자로 변환, 배열 요소 순환, 매개변수, 전개구문, 구조 분해 할당, JSON의 개념, AJAX의 개념

  </details>

  <details><summary>📖 문자열의 길이 </summary>

  * length 프로퍼티

  ```js
  
  let str = "Good morning!";
  let greeting = "안녕하세요?";
  str.length
  greeting.length

  ```

  </details>

  <details><summary>📖 charAt() 메서드 </summary>

  * 문자열에서 특정 위치의 문자를 가져오려면 charAt() 함수를 사용합니다.

  ```js
  
  let str = "Good morning!";
  str.charAt(3)
  str[5]

  ```

  </details>

  <details><summary>📖 substring() 메서드 </summary>

  * 시작 위치부터 끝 위치의 직전까지 추출해서 반환

  ```js
  
  str4.substring(5) // "morning"

  ```

  </details>

  <details><summary>📖 정규 표현식의 플래그 </summary>

  <table>
  <th>플래그</th><th>기능</th>
  <tr>
    <td>i</td><td>영문자의 대소문자를 구별하지 않고 검색합니다.</td>
  </tr>
  <tr>
    <td>g</td><td>패턴과 일치하는 것을 모두 찾습니다. g 패턴이 없으면 일치하는 패턴 중 첫 번째 패턴만 반환합니다.</td>
  </tr>
  <tr>
    <td>m</td><td>문자열의 행이 바뀌어도 검색합니다.</td>
  </tr>
  </table> <br/>

  </details>

  <details><summary>📖 자주 사용하는 정규 표현식 </summary>

  <table>
  <th>설명</th><th>정규 표현식</th>
  <tr>
    <td>숫자만 가능</td><td>/^[0-9]+$/</td>
  </tr>
  <tr>
    <td>양의 정수</td><td>/^[1-9]\d*$</td>
  </tr>
  <tr>
    <td>음의 정수</td><td>/^\-[1-9]\d*$</td>
  </tr>
  <tr>
    <td>영문자만 가능</td><td>/^[a-zA-Z]+$/</td>
  </tr>
  <tr>
    <td>숫자와 영문자만 가능</td><td>/^[a-zA-Z0-9]+$/</td>
  </tr>
  <tr>
    <td>한글만 가능</td><td>/^[가-힣]+$/</td>
  </tr>
  <tr>
    <td>한글과 영문자만 가능</td><td>/^[가-힣|a-zA-Z]+$/</td>
  </tr>
  <tr>
    <td>길이가 5~10개</td><td>/^.{5,10}$/</td>
  </tr>
  <tr>
    <td>메일 주소 체크</td><td>/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/</td>
  </tr>
  <tr>
    <td>전화번호 체크</td><td>/(\d{3}).*(\d{3}).*(\d{4})/</td>
  </tr>
  <tr>
    <td>확장자를 가진 그림 파일</td><td>/([^\s]+(?=\.(jpg|gif|png))\.\2)/</td>
  </tr>
  <tr>
    <td>1부터 n 사이의 번호</td><td>/^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^n$/</td>
  </tr>
  <tr>
    <td>암호 체크</td><td>/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/</td>
  </tr>
  </table> <br/>

  </details>

  <details><summary>📖 split() 메서드 사용 </summary>

  ```js

  str5 = "Hello, everyone"
  array2 = str5.split("");

  ```

  </details>

  <details><summary>📖 전개 연산자 </summary>

  ```js

  array3 = [...str5]

  ```

  </details>

  <details><summary>📖 Array.from() 메서드 사용하기 </summary>

  ```js

  array4 = Array.from(str5)

  ```

  </details>

  <details><summary>📖 join() 메서드 </summary>

  * 앞에서 문자 배열로 전환해서 저장했던 array4를 str5라는 문자열로 바꿀 수 있습니다.

  ```js

  str6 = array4.join("")

  ```

  </details>

  <details><summary>📖 forEach() 문 </summary>

  * 인수가 1개인 forEach() 문

  ```js

  let animals = ["lion", "bear", "bird"]
  animals.forEach(animal => {
    console.log(animal)
  })

  ```

  * 인수가 2개인 forEach() 문

  ```js

  animals.forEach((animal, index) => {
    console.log(`animals[${index}] : ${animal}`);
  });
  animals[0] : lion
  animals[1] : bear
  animals[2] : bird

  ```

  * 인수가 3개인 forEach() 문

  ```js

  animals.forEach((animal, index, array) => {
    console.log(`[${array}][${index}] : ${animal}`);
  });
  [lion, bear, bird][0] : lion
  [lion, bear, bird][1] : bear
  [lion, bear, bird][2] : bird

  ```

  </details>

  <details><summary>📖 for in.. 문 (배열 요소 반복) </summary>

  ```js

  var arr = [1, 2, 3, 4];

  for (var ar in arr) {
    alert(arr[ar]);
  }

  ```

  </details>

  <details><summary>📖 매개변수 기본값 </summary>

  * 함수를 선언할 때는 소괄호 안에 매개변수를 같이 지정하고 넘겨받는 값에 따라 결과를 표시
  
  * 매개변수에 기본값을 지정하지 않았을 때
  ```js

  function hello(name, message){
    console.log(`${name}님` ${message})
  }
  hello("도레미", "반갑습니다.");
  hello("백두산");

  ```

  * 매개변수에 기본값을 지정할 때
  ```js

  function hello(name, message = "안녕하세요?"){
    console.log(`${name}님` ${message})
  }
  hello("도레미", "반갑습니다.");
  hello("백두산");

  ```

  </details>

  <details><summary>📖 concat() 메서드 [배열 합치기] </summary>

  ```js

  let vegitable = ["양상추", "토마토", "피클"]
  let meat = ["불고기"]

  let meatBurger = vegitable.concat(meat, "빵")
  meatBurger

  ```

  ```js

  let meatBurger2 = meat.concat("빵", vegitable)
  meatBurger2

  ```

  </details>


  <details><summary>📖 전개 구문 </summary>

  * 값을 펼쳐주는 구문
  * 나머지 매개변수 혹은 전개 구문 이라고 합니다.
  * 전개 구문에서는 '...'기호를 사용합니다.
  
  * 나머지 매개변수로 사용시
  ```js

  function addNum(...numbers){
    let sum = 0;

    for(let number of numbers)
      sum += number;

    return sum;
  }

  console.log(addNum(1,2));
  console.log(addNum(1,2,3,4,5));

  ```

  * 전개구문을 사용해 배열 연결
  ```js

  const animal = ["bird", "cat"];
  const fruits = ["apple", "banana", "cherry"];

  animal.concat(fruits)
  [...animal, ...fruits]

  ```

   * 전개구문을 사용해 배열 복사
  ```js

  const fruits = ["apple", "banana", "cherry"];
  const favorite = fruits;

  favorite[1] = "grape";
  fruits

  ```

  ```js

  const mine = [...fruits]
  mine
  mine[1] = "orange"
  fruits
  mine
  
  ```

  </details>

  <details><summary>📖 구조 분해 할당 </summary>

  * 말 그대로 주어진 자료의 구조를 분해하여 변수에 할당하는 기능입니다.

  * 배열 구조 분해 할당
  ```js

  const fruits = ["사과", "복숭아"]
  let apple = fruits[0]
  let peach = fruits[1]

  ```
  
  ```js

  let [apple, peach] = ["사과", "복숭아"]

  ```

  ```js

  const fruits = ["사과", "복숭아"]
  let [apple, peach] = fruits

  ```

  ```js

  apple
  peach

  ```

  ```js

  let [member1, member2] = []
  member1
  member2

  ```

  * 일부 값만 구조 분해 할당하기
  ```js

  let [spring, ,fall] = ["봄", "여름", "가을", "겨울"]
  spring
  fall

  ```

  * 나머지 변수를 사용해 구조 분해 할당하기
  ```js

  let [teacher, ...students] = ["Kim", "Lee", "Park", "Choi"]
  teacher
  students

  ```

  * 두 변수의 값 교환
  ```js

  let x = 10
  let y = 20

  ```

  </details>

  <details><summary>📖 객체 구조 분해 </summary>

  ```js

  const member = {
    name : "kim",
    age : 25
  }

  let {name, age} = number
  name
  age

  ```

  ```js

  let name, age
  {name, age} = {name : "Kim", age : 25}
  name
  age

  ```

  * 새로운 변수 이름 사용하기
  ```js

  const member = {
    name : "Kim",
    age : 25
  }
  let {name : userName, age} = member
  userName

  ```

  * 중첩된 객체 구조 분해하기
  ```js

  const student = {
    name : "도레미",
    score : {
      history : 85,
      science : 94
    },
    friends : ["Kim", "Lee", "Park"]
  }

  ```

  ```js

  let {
    name,
    score : {
      history,
      science
    },
    friends : [f1, f2, f3]
  } = students

  ```

  ```js

  let { name, score : { history, science }, friends : [f1, f2, f3] } = students

  ```

  ```js

  history
  f2

  ```

  </details>

  <details><summary>📖 JSON </summary>

  * JSON은 `JavaScript Object Notation`의 줄임말로, 말 그대로 자바스크립트 객체 표기법을 사용하는 텍스트 형식의 자료를 가리킵니다.

  * JSON의 형식
  * JSON은 중괄호 사이에 이름과 값으로 구성되고 쉼표로 구분해서 여러 개의 쌍을 나열할 수 있습니다.
  ```js

  {
    "이름" : 값,
  }

  ```
  * 객체로 표현할 때
  ```js

  {
    name : 값,
  }

  ```
  * JSON으로 표현할 때
  ```js

  {
    "name" : 값,
  }

  ```
  * JSON의 이름을 맞게 사용한 예
  ```js

  {
    "name" : 값,
  }

  ```
  * JSON의 이름을 잘못 사용한 예
  ```js

  {
    'name' : 값,
    name : 값,
  }

  ```

  </details>

  <details><summary>📖 AJAX란? </summary>

  * 웹 문서 전체를 다시 불러오지 않고 일부분만 가져와서 실행하는 것을 `AJAX`라고 합니다.
  * 첫 글자인 A는 `비동기`를 가리킵니다.

  * 비동기란, `동시에 일어나지 않는다`는 뜻 입니다.

  * 두 번째 글자인 J는 `자바스크립트`를 의미합니다.
  * 세 번째 A는 `And`의 의미이고, 마지막 글자인 X는 `XML`에서 가져왔습니다.

  </details>

</details>

# 14주차(9주차 보강)

## 📝 비동기 프로그래밍

<details><summary>📘 chapter 14 </summary>

  <details><summary>📖 캔버스 란 </summary>

  * Canvas API를 사용하여 웹 문서 화면에 자유롭게 도형이나 직선을 그리는 기능을 간단히 `캔버스`라고 부릅니다.

  </details>

  <details><summary>📖 캔버스의 특징 </summary>

  * Canvas API를 이용하면 2차원 화면에 한 픽셀씩 그림을 그릴 수 있어서 그래픽을 세밀하게 제어할 수 있습니다.
  * 그래서 `UI`나 `차트`와 같은 `그래픽`보다 `게임 캐릭터`나 `배경 이미지`처럼 세밀한 제어가 필요한 그래픽 화면을 만들 때 주로 사용합니다.

  </details>

  <details><summary>📖 canvas 태그 </summary>

  * 웹 페이지에서 그래픽을 제어할 수 있는 캔버스 영역을 지정합니다.
  * 캔버스 영역에서는 그림을 그릴 수 있을 뿐만 아니라 이미지나 동영상을 불러와서 조작할 수도 있습니다.

  ```html

  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>캔버스 만들기</title>
    <style>
      body {
        display:flex;
        justify-content: flex-start;
        align-items: top;
      }
      div {
        margin:10px 20px;
      }
      canvas {
        border: 1px solid #000;
      }
    </style>
  </head>
  <body>
    <div id="canvas-1">
      <h2>크기를 지정하지 않을 때</h2>
      <canvas></canvas>
    </div>
    <div>
      <h2>크기를 지정했을 때 400*300</h2>
      <canvas width="400" height="300"></canvas>
    </div>  
  </body>
  </html>

  ```
  
  </details>

  <details><summary>📖 화면 전체를 캔버스로 사용 </summary>

  ```html

  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>캔버스 만들기</title>
    <style>
      body {
        margin:0;
        overflow:hidden;
      }
      canvas {
        background-color:#ccc;
      }
    </style>
  </head>
  <body>
    <canvas></canvas>

    <script src="./js/canvas-2.js"></script>
  </body>
  </html>

  ```

  ```js

  const canvas = document.querySelector('canvas');
      
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ```

  </details>

  <details><summary>📖 getContext() 메서드로 렌더링 콘텍스트 만들기 </summary>

  * `캔버스`에서 무엇인가를 그리려면 `렌더링 콘텍스트`를 만들고 자바스크립트를 사용해서 `렌더링 콘텍스트`를 조작해야합니다.

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");    

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(10, 10, 50, 100);

  ```

  </details>

  <details><summary>📖 캔버스에서 좌표 이해하기 </summary>

  * 캔버스에서 그래픽을 그리거나 기존의 그래픽 또는 동영상을 불러와서 조작할 경우 좌푯값이 기준이 됩니다.

  </details>

  <details><summary>📖 캔버스에서 각도 이해하기 </summary>

  * 캔버스에서는 가로 축의 오른쪽을 기준으로 시계 방향으로 각도를 측정합니다.
  * 각도의 값은 `도`로 표시하지 않고 `라디안 값`으로 표기합니다.
  * `1라디안`은 `180도` 이고, `Math.PI/ 180`으로 표기합니다.
  `radians = (Math.PI/ 180) * degree`

  </details>

  <details><summary>📖 사각형을 그리는 메서드 </summary>

  <table>
    <th>메서드</th><th>기능</th>
    <tr>
      <td>fillRect(x,y,width,height)</td><td>(x,y) 위치부터 시작해서 지정한 너비와 높이만큼 색이 채워진 사각형을 그립니다.</td>
    </tr>
    <tr>
      <td>strokeRect(x,y,width,height)</td><td>(x,y) 위치부터 시작해서 지정한 너비와 높이만큼 테두리만 있는 사각형을 그립니다.</td>
    </tr>
    <tr>
      <td>clearRect(x,y,width,height)</td><td>(x,y) 위치부터 시작해서 지정한 너비와 높이만큼 사각형 영역을 지웁니다.</td>
    </tr>
  </table>
   <br/>

  </details>

  <details><summary>📖 채우기 색과 선 색 지정하기 </summary>

  <table>
    <th>속성</th><th>기능</th>
    <tr>
      <td>fillStyle="색상"</td><td>도형을 채우는 색상을 지정합니다.</td>
    </tr>
    <tr>
      <td>strokeStyle="색상"</td><td>도형의 선 색상을 지정합니다.</td>
    </tr>
  </table>
   <br/>

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");    

  ctx.fillStyle = "rgb(200,0,0)";   // 채우기 색 - 빨강
  ctx.storkeStyle = "black";         // 선 색 - 검정
  ctx.fillRect(10, 10, 200, 100);  // 빨간색으로 채운 사각형

  ctx.strokeRect(10, 10, 200, 100);  // 검정색 선을 가진 사각형

  ctx.fillStyle = "blue";
  ctx.fillRect(50, 50, 120, 100);   // 파란색으로 채운 사각형

  ctx.clearRect(70, 80, 80, 45);  // 사각형 지우기

  ```

  </details>

  <details><summary>📖 삼각형 그리기 </summary>

  1. beginPath() 메서드를 이용하여 경로가 시작되는 것을 알립니다.
  2. 원하는 경로를 그립니다. 경로를 그리는 메서드는 Canvas API에서 제공하므로 경로에 따라 사용하는 메서드가 달라집니다.
  3. closePath() 메서드를 이용하여 경로의 시작점부터 끝나는 점까지 선을 그립니다. 이 메서드는 옵션이므로 도형을 채울 경우에는 사용하지 않아도 됩니다.
  4. stroke() 메서드로 테두리를 그리거나 fill() 메서드로 도형을 채웁니다.

  </details>

  <details><summary>📖 캔버스에 직선 그리기 </summary>

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");    

  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(200, 200);
  ctx.stroke();

  ```

  </details>

  <details><summary>📖 경로를 그리는 메서드로 삼각형 완성하기 </summary>

  ```js

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath(); // 경로를 시작합니다.
  ctx.moveTo(50, 50); // 시작점을 (50,50) 위치로 이동시킵니다.
  ctx.lineTo(150, 100); // 시작점에서 (150, 100)까지 경로를 만듭니다.
  ctx.lineTo(50, 150); // 앞서 그린 경로 끝점에서 (50,150)까지 경로를 만듭니다.
  ctx.closePath(); // 경로를 닫습니다. (닫힌 도형)
  ctx.stroke(); // 지금까지 만든 경로를 선으로 그립니다.

  ctx.beginPath(); // 경로를 시작합니다.
  ctx.moveTo(150, 100); // 시작점을 (150, 100) 위치로 이동시킵니다.
  ctx.lineTo(250, 50); // 시작점에서 (250, 50)까지 직선을 만듭니다.
  ctx.lineTo(250, 150); // 시작점에서 (250, 150)까지 직선을 만듭니다.
  ctx.closePath(); // 경로를 닫습니다. (닫힌 도형)
  ctx.fillStyle = "rgb(0, 200, 0)"; // 채우기 색을 rgb(0,200,0)으로 지정합니다.
  ctx.fill(); // 만들어진 (닫힌) 도형에 색을 채웁니다.

  ```

  </details>

  <details><summary>📖 원이나 호 그리기 </summary>

  `arc(x, y, r, startAngle, endAngel [, counterClockwise])`
  * x,y : 원의 중점
  * r : 원의 반지름
  * startAngle : 원이나 호의 시작점을 라디안으로 표시합니다.
  * endAngle : 원이나 호의 끝점을 라디안으로 표시합니다.
  * counterClockwise : 반시계 방향으로 그릴지 여부를 참이나 거짓으로 지정하고 따로 지정하지않으면 true로 인식합니다. 즉, 반시계 방향으로 그립니다.

  </details>

  <details><summary>📖 원그리기 </summary>

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");    

  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "red";

  ctx.beginPath()
  ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ```

  </details>

  <details><summary>📖 반원과 호 그리기 </summary>

  ```js

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true); // 반시계 방향
  ctx.arc(280, 100, 50, 0, (Math.PI / 180) * 180, false); // 시계 방향
  ctx.fill();

  ctx.beginPath();
  ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false); // 90도부터 270도까지 시계 방향으로 선으로 반원 그리기
  ctx.closePath();
  ctx.stroke();

  ctx.strokeStyle = "blue";
  ctx.moveTo(200, 100);
  ctx.beginPath();
  ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false); // 0도부터 60도까지 시계방향을 선으로 호 그리기
  ctx.stroke();

  ```

  </details>

  <details><summary>📖 타원 그리기 </summary>

  `ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngel [, counterClockwise])`
  * x,y : 타원의 중점
  * radiusX : 타원의 가로 반지름
  * radiusY : 타원의 세로 반지름
  * rotation : 타원의 회전 크기, 라디안값으로 지정합니다.
  * startAngle : 타원의 시작점을 라디안으로 표시합니다.
  * endAngle : 타원의 끝점을 라디안으로 표시합니다.
  * counterClockwise : 반시계 방향으로 그릴지 여부를 참이나 거짓으로 지정하고 따로 지정하지않으면 true로 인식합니다. 즉, 반시계 방향으로 그립니다.

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");    

  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
  ctx.stroke();

  ```

  </details>

  <details><summary>📖 원을 변형해서 타원 그리기 </summary>

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");    

  // 원의 세로 길이를 축소해서 타원으로 그리기
  ctx.strokeStyle = "blue";
  ctx.scale(1, 0.7);
  ctx.beginPath()
  ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.beginPath()
  ctx.arc(200, 150, 30, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();

  ```

  </details>

  <details><summary>📖 2차 베지에 곡선 그리기 </summary>

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");    

  ctx.beginPath();
  ctx.moveTo(50, 200);   // 곡선 시작 위치
  ctx.quadraticCurveTo(200, 50, 350, 200); // 시작 위치부터 (350, 200)까지 곡선 그리기
  ctx.stroke();

  ```

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");    

  ctx.beginPath();
  ctx.moveTo(50, 100);   // 곡선 시작 위치
  ctx.quadraticCurveTo(100, 50, 150, 100); 
  ctx.quadraticCurveTo(200, 150, 250, 100); 
  ctx.quadraticCurveTo(300, 50, 350, 100); 
  ctx.stroke();

  ```

  </details>

  <details><summary>📖 3차 베지에 곡선 그리기 </summary>

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");    

  ctx.beginPath();
  ctx.moveTo(50, 100);   // 곡선 시작 위치
  ctx.bezierCurveTo(90, 250, 310, 10, 350, 100); 
  ctx.strokeStyle = "green";    
  ctx.stroke();

  ```

  </details>

  <details><summary>📖 Path2D 객체 사용하기 </summary>

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");  

  let triangle = new Path2D();   // 삼각형 경로 객체
  triangle.moveTo(100, 100);
  triangle.lineTo(300, 100);
  triangle.lineTo(200, 260);
  triangle.closePath();

  let circle = new Path2D();    // 원 경로 객체
  circle.arc(200, 155, 50, 0, Math.PI * 2);

  ctx.fillStyle = "green";
  ctx.stroke(triangle);
  ctx.fill(circle);

  ```

  </details>

  <details><summary>📖 텍스트를 그리는 메서드 </summary>

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");

  ctx.font = "60px Arial";
  ctx.fillText("HELLO", 50, 70);
  ctx.strokeText("HELLO", 50, 150);

  ```

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");

  ctx.font = "italic 60px serif";
  ctx.fillText("Javascript", 50, 70);
  ctx.font = "bold 60px sans-serif";
  ctx.fillText("Javascript", 50, 150);

  ```

  </details>

  <details><summary>📖 이미지 그리기 </summary>

  ```js

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");

  let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  } 
  img.src = "images/cat.jpg";

  ```

  </details>

  <details><summary>📖 이미지 크기 조절하기 </summary>

  `drawImage(image, dx, dy, dw ,dh)`
  * image : 캔버스에 표시할 이미지 객체를 지정합니다.
  * dx, dy : 캔버스의 왼쪽 위 모서리로부터 얼마나 떨어져서 이미지를 표시할지 지정합니다.
  * dw, dh : 캔버스에 표시할 이미지 크기를 지정합니다.

  </details>

  <details><summary>📖 이미지의 일부분만 표시하기 </summary>

  ```js
  
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");

  let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);   
  } 
  img.src = "images/cat.jpg";  
  
  ```

  </details>

  <details><summary>📖 이미지 클리핑하기 </summary>

  ```js
  
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext("2d");

  let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);   // 캔버스 크기에 맞게 지정
  } 
  img.src = "images/bird.jpg";
  ctx.beginPath();
  ctx.arc(300, 200, 150, 0, Math.PI * 2, false);
  ctx.clip(); 
  
  ```

  </details>

</details>

<details><summary>📘 chapter 13 </summary>

  <details><summary>📖 동기 처리 방식과 비동기 처리 방식 </summary>

  * 동기 처리 방식

  ```js

  function displayA() {
  console.log("A");
  }
  function displayB() {
    console.log("B");
  }
  function displayC() {
    console.log("C");
  }    
  displayA();
  displayB();
  displayC();

  ```

  </details>

  <details><summary>📖 자바스크립트는 싱글 스레드 언어 </summary>

  * 자바스크립트는 기본적으로 한 번에 하나의 작업만 처리하는 `싱글 스레드 언어`입니다.
  * 스레드는 프로세스에서 작업을 실행하는 `단위`를 가리키는데, 한 번에 하나의 스레드만 처리하면 `싱글 스레드`, 한 번에 여러 개의 스레드를 사용한다면 `멀티 스레드` 라고 합니다.

  ```js

  function displayA() {
  console.log("A");
  }
  function displayB() {
    setTimeout(() => console.log("B"), 2000);
  }
  function displayC() {
    console.log("C");
  }    
  displayA();
  displayB();
  displayC();

  ```

  </details>

  <details><summary>📖 비동기 처리 방식 </summary>

  * 실행 시간이 다른 함수들을 원하는 처리순서에 맞게 프로그래밍 하는 것을 `비동기 처리` 라고 합니다.

  ```js

  function displayA() {
  console.log("A");
  }
  function displayB(callback) {
    setTimeout(() => {
      console.log("B");
      callback();
    }, 2000);
  }
  function displayC() {
    console.log("C");
  }    
  displayA();
  displayB(displayC);

  ```

  <table>
    <th>비동기 방식</th><th>버전</th><th>기능</th>
    <tr>
      <td>콜백 함수</td><td>기존부터 사용</td><td>함수 안에 또 다른 함수를 매개변수로 넘겨서 실행 순서를 제어합니다. 콜백 함수가 많아지면 가독성이 떨어질 수 있습니다.</td>
    </tr>
    <tr>
      <td>프로미스</td><td>에크마스크립트2015 부터 도입</td><td>Promise 객체와 콜백 함수를 사용해서 실행순서를 제어</td>
    </tr>
    <tr>
      <td>async, await</td><td>에크마스크립트2017 부터 도입</td><td>async 함수와 await 예약어를 사용해서 실행순서를 제어</td>
    </tr>
  </table>
   <br/>

  </details>

  <details><summary>📖 비동기 처리와 콜백 함수 </summary>

  * 함수 이름을 콜백으로 사용하기

  ```js

  function order(coffee){
    console.log(`${coffee} 주문 접수`);
  }

  ```

  ```js

  function order(result){
    console.log(`${result} 준비 완료`);
  }

  ```

  ```js

  function order(coffee, callback) {
  console.log(`${coffee} 주문 접수`);
  setTimeout(() => {
    callback(coffee);
    }, 3000);    
  }
  function display(result) {
    console.log(`${result} 준비 완료 🥤 `);
  }

  order("아메리카노", display); 

  ```

  </details>

  <details><summary>📖 익명으로 콜백 함수 작성하기 </summary>

  ```js

  function displayLetter() {
    console.log("A");
    setTimeout( () => {
      console.log("B");
      setTimeout( () => {
        console.log("C");
        setTimeout( () => {
          console.log("D");
          setTimeout( () => {
            console.log("stop!");
          }, 1000);
        }, 1000);
      },1000);
    }, 1000);
  }   

  displayLetter();

  ```

  </details>

  <details><summary>📖 프로미스 </summary>

  * 프로미스는 이름에서 알 수 있듯이 처리에 성공했을때 실행할 콜백 함수와 성공하지 않았을때 실행할 콜백 함수를 미리 약속 하는 것 입니다.

  `new Promise(resolve, reject)`

  ```js

  const pizza = new Promise((resolve, reject) => {
    // 실행할 소스를 작성
  })

  ```

  ```js

  let likePizza = true;      // 이 값을 false로 바꿔서도 테스트해 보세요. 
  const pizza = new Promise((resolve, reject) => {
    if (likePizza) 
      resolve('피자를 주문합니다.');
    else
      reject('피자를 주문하지 않습니다.');
  });


  pizza
    .then(
      result => console.log(result)
    )
    .catch(
      err => console.log(err)
    );

  // 아래와 같이 작성할 수도 있음  
  // pizza.then(
  //   result => console.log(result),
  //   err => console.log(err)
  // );    

  ```

  </details>

  <details><summary>📖 Promise 객체 사용하기 </summary>

  * Promise 객체를 사용하는 소스를  `소비 코드` 라고 합니다. 즉, `프로미스는 객체를 생성하는 부분`과 `프로미스를 사용하는 부분`으로 나뉩니다.
  * 프로미스를 실행할 때는 `then() 메서드`와 `catch() 메서드`, `finally() 메서드`를 사용합니다.

  </details>

  <details><summary>📖 then()과 catch() </summary>

  * `.then()`과 `.catch()`가 `하나의 문` 입니다. 그리고 then()과 catch()메서드에서 사용한 result변수나 err변수에는 다른 이름을 사용해도 됩니다.

  ```js

  let likePizza = false;      // 이 값을 false로 바꿔서도 테스트해 보세요. 
  const pizza = new Promise((resolve, reject) => {
    if (likePizza) 
      resolve('피자를 주문합니다.');
    else
      reject('피자를 주문하지 않습니다.');
  });


  pizza
    .then(
      result => console.log(result)
    )
    .catch(
      err => console.log(err)
    );

  // 아래와 같이 작성할 수도 있음  
  // pizza.then(
  //   result => console.log(result),
  //   err => console.log(err)
  // );    

  ```

  </details>

  <details><summary>📖 finally </summary>

  * 프로미스를 실행할 때 사용하는 `finally`는 프로미스에서 `성공`을 넘기든, `실패`를 넘기든 상관없이 `마지막에 실행하려고 할 때 사용`합니다.

  ```js

  let likePizza = true;
  const pizza = new Promise((resolve, reject) => {
    if (likePizza) 
      resolve('피자를 주문합니다.');
    else
      reject('피자를 주문하지 않습니다.');
  });

  pizza
    .then(
      result => console.log(result)
    )
    .catch(
      err => console.log(err)
    )
    .finally (
      () => console.log('완료')
    );  

  ```

  <table>
    <th>상태</th><th>설명</th>
    <tr>
      <td>pending</td><td>처음 프로미스를 만들면 대기 상태가 됩니다.</td><
    </tr>
    <tr>
      <td>fulfilled</td><td>처리에 성공하면 이행 상태가 됩니다.</td>
    </tr>
    <tr>
      <td>reject</td><td>처리에 성공하지 못하면 거부 상태가 됩니다.</td>
    </tr>
  </table>
   <br/>

  </details>

  <details><summary>📖 콜백 함수로 여러 단계 연결하기 </summary>

  ```js

  const step1 = (callback) => {
  setTimeout(() => {
    console.log("피자 도우 준비");
    callback();
    }, 2000);
  }

  const step2 = (callback) => {
    setTimeout(() => {
      console.log("토핑 완료");
      callback();
    }, 1000);
  }

  const step3 = (callback) => {
    setTimeout(() => {
      console.log("굽기 완료");
      callback();
    }, 2000);
  }

  console.log("피자를 주문합니다.");
  step1(function() {
    step2(function() {
      step3(function() {
        console.log("피자가 준비되었습니다. 🍕");
      });
    });
  });

  ```

  </details>

  <details><summary>📖 프로미스 체이닝 </summary>

  * then() 메서드를 사용해서 여러 개의 프로미스를 연결하는 것을 `프로미스 체이닝`이라고 합니다.
  * then() 메서드가 프로미스와 프로미스를 연결하는 사슬이되는 셈이죠.

  ```js

  const pizza = () => {
  return new Promise((resolve, reject) => {
      resolve("피자를 주문합니다.");
  });
  };

  const step1 = (message) => {
    console.log(message);
  };

  pizza().then(result => step1(result));

  ```

  ```js

  const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve('피자를 주문합니다.');
  });
  };

  const step1 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('피자 도우 준비');
      }, 3000);
    });
  };

  const step2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('토핑 완료');
      }, 1000);
    });
  };

  const step3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('굽기 완료');
      }, 2000);
    });
  };

  pizza()
    .then((result) => step1(result)) // pizza()가 성공하면 step1() 실행
    .then((result) => step2(result)) // step1()이 성공하면 step2() 실행
    .then((result) => step3(result)) // step2()이 성공하면 step3() 실행
    .then((result) => console.log(result)) // step3()이 성공하면 "굽기 완료" 표시
    .then(() => {
      console.log('피자가 준비되었습니다. 🍕');
    });

  // 위의 소비 코드를 아래와 같이 축약해서 표현할 수 있습니다.
  // pizza()
  // .then(step1)
  // .then(step2)
  // .then(step3)
  // .then(console.log)
  // .then(() => {
  //   console.log("피자가 준비되었습니다. 🍕");
  // });

  ```

  </details>

  <details><summary>📖 프로미스 소비 코드 줄여서 작성하기 </summary>

  ```js

  pizza()
    .then(result => step1(result))

  ```

  ```js

  pizza()
    .then(step1)

  ```

  ```js

  pizza()
    .then(step1)
    .then(step2)
    .then(step3)
    .then(console.log)
    .then(() => {
      console.log("피자가 준비되었습니다.");
    });

  ```

  </details>

  <details><summary>📖 fetch API </summary>

  * `fetch`는 앞에서 살펴보았던 `AJAX`처럼 서버로 요청을 보내거나 자료를 받아오는 방법이지만 프로미스를 반환한다는게 가장 중요한 차이점 입니다.

  `fetch(위치, 옵션)`
  * 위치 : 자료가 있는 URL이나 파일 이름을 입력합니다.
  * 옵션 : GET이나 POST같은 요청방식을 지정합니다. 따로 지정하지 않을 경우 GET메서드를 사용해서 서버로부터 값을 가져오고 이외에도 매개변수가 필요할 경우에는 매개변수를 넣을 수 있습니다.

  </details>

  <details><summary>📖 fetch로 파일 가져오기 </summary>

  ```js
  
  fetch('student-2.json')                  // 1) json 파일을 읽어온다.
  .then(response => response.json())       // 2) json 파일을 객체로 변환한다.
  .then(json => {                          // 3) 객체를 출력한다.  
    let output = '';
    json.forEach(student => {
      output += `
        <h2>${student.name}</h2>
        <ul>
          <li>전공 : ${student.major}</li>
          <li>학년 : ${student.grade}</li>
        </ul>
        <hr>
      `;
    });
    document.querySelector('#result').innerHTML = output;
  })
  .catch(error => console.log(error));    // 4) 에러가 발생하면 에러를 출력한다.
  
  ```

  </details>

  <details><summary>📖 async 함수 </summary>

  ```js

  function displayHello() {
  console.log("Hello");
  }

  displayHello();

  ```

  ```js

  async function displayHello() {
  console.log("Hello");
  }

  displayHello();

  ```

  ```js

  function whatsYourFavorite() {
  let fav = "Javascript";
  return new Promise((resolve, reject) => resolve(fav));      
  }

  function displaySubject(subject) {
    return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));      
  }

  whatsYourFavorite()
  .then(displaySubject)  // .then(response => displaySubject(response))
  .then (console.log);   // .then (result => console.log(result));

  ```

  ```js

  async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;   
  }

  async function displaySubject(subject) {
    return `Hello, ${subject}`;      
  }

  whatsYourFavorite()
  .then(displaySubject)  // .then(response => displaySubject(response))
  .then (console.log);  // .then (result => console.log(result));

  ```

  ```js

  async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;   
  }

  async function displaySubject(subject) {
    return `Hello, ${subject}`;      
  }

  async function init() {
    const fav = await whatsYourFavorite();
    const result = await displaySubject(fav);
    console.log(result);
  }

  init();

  ```

  </details>

</details>

# 13주차

## 📝 HTTP 통신과 JSON

<details><summary>📘 chapter 12 </summary>

  <details><summary>📖 HTTP란? </summary>

  * 클라이언트와 서버간에 자료를 주고받으려면 미리 약속된 규칙이 필요한데, 이것을 `프로토콜`이라고 합니다.
  * 웹 에서는 `HTTP`라는 프로토콜을 사용합니다.
  * 그리고 클라이언트에서 서버로 자료 요청하는 것은 `HTTP 요청`, 서버에서 응답해서 클라이언트로 자료를 보내는 것은 `HTTP 응답`이라고 합니다.

  </details>

  <details><summary>📖 요청 헤더와 응답 헤더 </summary>

  * 사이트 주소 뿐만아닌 사용 중인 시스템 정보와 웹 브라우저 정보, 사용한 언어등 다른 정보까지 함께 전송되는데, 이런 정보는 `헤더`의 형태로 전송되므로 요청할 때 보내는 헤더를 `요청 헤더` 라고합니다.
  * 응답 메세지를 보내는 시간, 메세지를 클라이언트에 어떻게 표시할지 등의 정보는 `응답 헤더`에 담기고, 이미지나 텍스트 같은 실제 사이트 내용은 `응답 본문`에 담겨서 전달됩니다.

  </details>

  <details><summary>📖 요청방식, GET과 POST </summary>

  * `GET 방식`은 서버에 자료를 요청할 때 사이트 주소의 뒤에 자료를 붙여서 보내는 방식 입니다.
  * 웹 브라우저 창에서 서버로 보내는 요청 헤더에 `GET 메서드`를 사용합니다.
  * `POST 방식`은 서버에 자료를 보낼 때 요청하는 방식으로, 흔히 회원가입 폼이나 로그인 폼에서 중요한 자료를 입력하고 `서버`로 보낼 때 사용합니다.
  * `POST 방식`을 사용하면 요청 내용이 겉으로 드러나지 않고 `요청 본문`에 따로 담겨서 전송됩니다.

  </details>

  <details><summary>📖 응답 상태 </summary>

  <table>
    <th>코드</th><th>메세지</th><th>기능</th>
    <tr>
      <td>2XX</td><td>성공</td><td>자료 요청을 수락했거나 자료를 성공적으로 전송했습니다.</td>
    </tr>
    <tr>
      <td>200</td><td>OK</td><td>서버에서 클라이언트로 성공적으로 전송했습니다.</td>
    </tr>
    <tr>
      <td>202</td><td>Accepted</td><td>서버에서 클라이언트 요청을 수락했습니다.</td>
    </tr>
    <tr>
      <td>4XX</td><td>클라이언트 오류</td><td>클라이언트에서 주소를 잘못 입력 했거나 요청이 잘못되었습니다.</td>
    </tr>
    <tr>
      <td>400</td><td>Bad Request</td><td>요청을 실패 했습니다.</td>
    </tr>
    <tr>
      <td>401</td><td>Unauthorized</td><td>권한이 없어 거절되었지만, 인증 가능합니다.</td>
    </tr>
    <tr>
      <td>403</td><td>Forbidden</td><td>권한이 없어 거절되었고, 인증을 시도해도 계속 거절됩니다.</td>
    </tr>
    <tr>
      <td>404</td><td>Not Found</td><td>문서를 찾을 수 없습니다.</td>
    </tr>
    <tr>
      <td>408</td><td>Request Timeout</td><td>요청 시간이 초과되었습니다.</td>
    </tr>
    <tr>
      <td>5XX</td><td>서버오류</td><td>서버 측의 오류로 처리할 수 없습니다.</td>
    </tr>
    <tr>
      <td>500</td><td>Internal Server Error</td><td>서버의 내부에 오류가 발생했습니다.</td>
    </tr>
    <tr>
      <td>503</td><td>Service Unavailable</td><td>요청한 서비스를 이용할 수 없습니다.</td>
    </tr>
  </table>
   <br/>

  </details>

  <details><summary>📖 JSON </summary>

  * JSON은 `JavaScript Object Notation`의 줄임말로, 말 그대로 자바스크립트 객체 표기법을 사용하는 텍스트 형식의 자료를 가리킵니다.

  * JSON의 형식
  * JSON은 중괄호 사이에 이름과 값으로 구성되고 쉼표로 구분해서 여러 개의 쌍을 나열할 수 있습니다.
  ```js

  {
    "이름" : 값,
  }

  ```
  * 객체로 표현할 때
  ```js

  {
    name : 값,
  }

  ```
  * JSON으로 표현할 때
  ```js

  {
    "name" : 값,
  }

  ```
  * JSON의 이름을 맞게 사용한 예
  ```js

  {
    "name" : 값,
  }

  ```
  * JSON의 이름을 잘못 사용한 예
  ```js

  {
    'name' : 값,
    name : 값,
  }

  ```

  </details>

  <details><summary>📖 JSON의 값 </summary>

  * JSON 자료의 값에서는 수와 문자열, 논리값, null과 같은 기본 자료형과 배열, 객체와 같은 복합 자료형을 사용할 수 있습니다.

  * 숫자형 `48, -72, 25.8, -8.4, 2.3e4`
  * 문자열 `자바스크립트, HTML5`
  * 논리값과 null
  * JSON 문자열과 배열
  ```js

  {
    "name" : "도레미",
    "major" : "컴퓨터 공학",
    "grade" : 2,
    "course" : ["웹 기초", "자바스크립트", "인공지능"]
  }

  ```

  </details>

  <details><summary>📖 객체를 JSON 자료로 변환하기 </summary>

  * 객체를 JSON 문자열로 변환하는 것을 `직렬화` 라고 하고, `JSON.stringify()` 함수를 사용합니다.
  `JSON.stringify(객체)`

  ```js

  let student = {name : "도레미", major:"컴퓨터 공학", grade:2}
  let json = JSON.stringify(student)

  ```

  </details>

  <details><summary>📖 JSON 문자열을 객체로 변환하기 </summary>

  * JSON 문자열을 자바스크립트 객체로 변환하는 것을 `파싱`이라고 하고, 이때 `JSON.parse()` 함수를 사용합니다.
  `JSON.parse(JSON 문자열)`

  ```js

  let member = '{"name" : "백두산", "age" : 30, "hobby" : "swimming"}'
  let member_obj = JSON.parse(member)

  ```

  </details>

  <details><summary>📖 AJAX란? </summary>

  * 웹 문서 전체를 다시 불러오지 않고 일부분만 가져와서 실행하는 것을 `AJAX`라고 합니다.
  * 첫 글자인 A는 `비동기`를 가리킵니다.

  * 비동기란, `동시에 일어나지 않는다`는 뜻 입니다.

  * 두 번째 글자인 J는 `자바스크립트`를 의미합니다.
  * 세 번째 A는 `And`의 의미이고, 마지막 글자인 X는 `XML`에서 가져왔습니다.

  </details>

  <details><summary>📖 XMLHttpRequest 객체 만들기 </summary>

  * 이름에는 XML이라고 되어있지만, XML뿐만 아닌 JSON을 비롯하여 여러 종류의 자료를 요청하고 받아올 수 있습니다.
  `new XMLHttpRequest()`

  ```js

  let xhr = new XMLHttpRequest()

  ```

  </details>

  <details><summary>📖 open 메서드 </summary>

  * open() 메서드를 사용해서 어떤 방식을 사용할지, 어떤자료가 필요한지, 그리고 비동기 처리 여부를 지정하는데, 이 과정을 `요청 초기화` 라고 합니다.
  `open(방식, 자료 위치, 비동기 여부)`

  * 방식 : HTTP 요청 방식을 지정합니다. 주로 사용하는 값은 GET과 POST, PUT 중 하나이고 영문 대문자로 사용해야 합니다.
  * 자료 위치 : 요청할 서버의 URL을 지정합니다.
  * 비동기 여부 : 비동기 요청인지, 동기 요청인지를 판단하는 항목입니다. 사용할 수 있는 값은 true와 false인데, true이면 비동기로, false이면 동기로 판단합니다. 기본적으로 비동기 처리하므로 따로 지정하지 않으면 비동기로 처리합니다.(기본값 true), 만약 동기처리하려면 false로 지정합니다.

  </details>

  <details><summary>📖 send() 메서드 </summary>

  * `send(내용)`
  * send() 메서드는 사용자 요청을 서버로 보내는 메서드입니다.
  * send() 메서드에서 소괄호 안에 들어가는 매개변수는 옵션입니다.

  * setRequestHeader(header, value) : HTTP 요청을 보내기 전에 HTTP의 header 값을 특정 값으로 설정할 때 사용하는 메서드로, 반드시 open() 메서드 다음에 써야 합니다.
  * getResponseHeader() : 서버 웅답 중에서 HTTP 헤더를 알아내고 싶을 때 사용하는 메서드 입니다.
  * getAllResponseHeaders() : HTTP 요청에 대한 모든 응답 헤더들을 반환합니다. Content-Length, Date, URI 등을 포함하는 헤더 정보의 키와 값을 쌍으로 반환합니다.

  </details>

  <details><summary>📖 JSON 파일 요청 </summary>

  ```js

  let chr = new XMLHttpRequest();
  xhr.open("GET", "student.json");
  xhr.send();

  ```

  </details>

  <details><summary>📖 readyState 프로퍼티 </summary>

  <table>
    <th>상태</th><th>기능</th>
    <tr>
      <td>0</td><td>아직 아무 요청도 하지 않은 상태입니다.</td>
    </tr>
    <tr>
      <td>1</td><td>서버로 자료를 요청하고 성공한 상태 입니다.</td>
    </tr>
    <tr>
      <td>2</td><td>서버 요청에 대한 응답으로 헤더가 도착한 상태입니다.</td>
    </tr>
    <tr>
      <td>3</td><td>서버에서 자료가 로딩중인 상태입니다.</td>
    </tr>
    <tr>
      <td>4</td><td>자료 처리가 끝나 프로그램에서 사용할 수 있는 상태입니다.</td>
    </tr>
  </table>
   <br/>

  </details>

  <details><summary>📖 State 프로퍼티와 statusText 프로퍼티 </summary>

  * status 프로퍼티는 HTTP 상태 코드를 나타내고 statusText 프로퍼티는 상태에 대한 설명 메세지를 알려줍니다.

  </details>

  <details><summary>📖 readystatechange 이벤트 </summary>

  * readyState 값이 바뀔 때마다 발생하므로 이 이벤트를 사용해서 상태에 따라 필요한 명령을 처리할 수 있습니다.

  ```js

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {

    }
  }

  ```

  ```js

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.state == 200) {

    }
  }

  ```

  </details>

  <details><summary>📖 responseText 프로퍼티 </summary>

  * responseText 프로퍼티에는 요청에 대한 응답이 문자열 형태로 저장됩니다.

  ```js

  let students = JSON.parse(xhr.resopnseText);
  document.getElementById("result")

  ```

  </details>

</details>

<details><summary>📘 chapter 13 </summary>

  <details><summary>📖 동기 처리 방식과 비동기 처리 방식 </summary>

  * 동기 처리 방식

  ```js

  function displayA() {
  console.log("A");
  }
  function displayB() {
    console.log("B");
  }
  function displayC() {
    console.log("C");
  }    
  displayA();
  displayB();
  displayC();

  ```

  </details>

  <details><summary>📖 자바스크립트는 싱글 스레드 언어 </summary>

  * 자바스크립트는 기본적으로 한 번에 하나의 작업만 처리하는 `싱글 스레드 언어`입니다.
  * 스레드는 프로세스에서 작업을 실행하는 `단위`를 가리키는데, 한 번에 하나의 스레드만 처리하면 `싱글 스레드`, 한 번에 여러 개의 스레드를 사용한다면 `멀티 스레드` 라고 합니다.

  ```js

  function displayA() {
  console.log("A");
  }
  function displayB() {
    setTimeout(() => console.log("B"), 2000);
  }
  function displayC() {
    console.log("C");
  }    
  displayA();
  displayB();
  displayC();

  ```

  </details>

  <details><summary>📖 비동기 처리 방식 </summary>

  * 실행 시간이 다른 함수들을 원하는 처리순서에 맞게 프로그래밍 하는 것을 `비동기 처리` 라고 합니다.

  ```js

  function displayA() {
  console.log("A");
  }
  function displayB(callback) {
    setTimeout(() => {
      console.log("B");
      callback();
    }, 2000);
  }
  function displayC() {
    console.log("C");
  }    
  displayA();
  displayB(displayC);

  ```

  <table>
    <th>비동기 방식</th><th>버전</th><th>기능</th>
    <tr>
      <td>콜백 함수</td><td>기존부터 사용</td><td>함수 안에 또 다른 함수를 매개변수로 넘겨서 실행 순서를 제어합니다. 콜백 함수가 많아지면 가독성이 떨어질 수 있습니다.</td>
    </tr>
    <tr>
      <td>프로미스</td><td>에크마스크립트2015 부터 도입</td><td>Promise 객체와 콜백 함수를 사용해서 실행순서를 제어</td>
    </tr>
    <tr>
      <td>async, await</td><td>에크마스크립트2017 부터 도입</td><td>async 함수와 await 예약어를 사용해서 실행순서를 제어</td>
    </tr>
  </table>
   <br/>

  </details>

  <details><summary>📖 비동기 처리와 콜백 함수 </summary>

  * 함수 이름을 콜백으로 사용하기

  ```js

  function order(coffee){
    console.log(`${coffee} 주문 접수`);
  }

  ```

  ```js

  function order(result){
    console.log(`${result} 준비 완료`);
  }

  ```

  ```js

  function order(coffee, callback) {
  console.log(`${coffee} 주문 접수`);
  setTimeout(() => {
    callback(coffee);
    }, 3000);    
  }
  function display(result) {
    console.log(`${result} 준비 완료 🥤 `);
  }

  order("아메리카노", display); 

  ```

  </details>

  <details><summary>📖 익명으로 콜백 함수 작성하기 </summary>

  ```js

  function displayLetter() {
    console.log("A");
    setTimeout( () => {
      console.log("B");
      setTimeout( () => {
        console.log("C");
        setTimeout( () => {
          console.log("D");
          setTimeout( () => {
            console.log("stop!");
          }, 1000);
        }, 1000);
      },1000);
    }, 1000);
  }   

  displayLetter();ㅓ

  ```

  </details>

</details>

# 12주차

## 📝 배열과 객체, 좀 더 깊게 살펴보기

<details><summary>📘 chapter 11 </summary>

  <details><summary>📖 매개변수 기본값 </summary>

  * 함수를 선언할 때는 소괄호 안에 매개변수를 같이 지정하고 넘겨받는 값에 따라 결과를 표시
  
  * 매개변수에 기본값을 지정하지 않았을 때
  ```js

  function hello(name, message){
    console.log(`${name}님` ${message})
  }
  hello("도레미", "반갑습니다.");
  hello("백두산");

  ```

  * 매개변수에 기본값을 지정할 때
  ```js

  function hello(name, message = "안녕하세요?"){
    console.log(`${name}님` ${message})
  }
  hello("도레미", "반갑습니다.");
  hello("백두산");

  ```

  </details>

  <details><summary>📖 전개 구문 </summary>

  * 값을 펼쳐주는 구문
  * 나머지 매개변수 혹은 전개 구문 이라고 합니다.
  * 전개 구문에서는 '...'기호를 사용합니다.
  
  * 나머지 매개변수로 사용시
  ```js

  function addNum(...numbers){
    let sum = 0;

    for(let number of numbers)
      sum += number;

    return sum;
  }

  console.log(addNum(1,2));
  console.log(addNum(1,2,3,4,5));

  ```

  * 전개구문을 사용해 배열 연결
  ```js

  const animal = ["bird", "cat"];
  const fruits = ["apple", "banana", "cherry"];

  animal.concat(fruits)
  [...animal, ...fruits]

  ```

   * 전개구문을 사용해 배열 복사
  ```js

  const fruits = ["apple", "banana", "cherry"];
  const favorite = fruits;

  favorite[1] = "grape";
  fruits

  ```

  ```js

  const mine = [...fruits]
  mine
  mine[1] = "orange"
  fruits
  mine
  
  ```

  </details>

  <details><summary>📖 객체의 프로퍼티 </summary>

  * 대괄호 표기법
  ```js

  const book = {
    title: "Javascript",
    pages: 500
  }
  book.published date = "2022-01"

  ```

  ```js

  book["published date"] = "2022-01"
  book

  ```

  * 계산된 프로퍼티 이름
  ```js

  function fn(){
    return "result";
  }

  const obj = {
    [fn()] : "함수 키",
  }
  obj

  ```

  ```js

  function add(a, b){
    return a + b;
  }

  const obj = {
    [fn()] : "함수 키",
    [`${add(10, 20)} key`] : "계산식 키"
  }
  obj

  ```

  * 프로퍼티값 단축하기
  ```js

  let user = {
    name : "도레미"
  }
  user.age = 25
  user
  
  ```

  ```js

  function makeUser(name, age){
    return(
      name : name,
      age : age
    )
  }
  let user1 = makeUser("백두산", 20)
  user1
  
  ```

  ```js

  function makeUser(name, age){
    return(
      name,
      age
    )
  }
  let user2 = makeUser("한라산", 27)
  user2
  
  ```

  </details>

  <details><summary>📖 객체에서 심벌키 사용 </summary>

  ```js

  let id1 = Symbol()
  let id2 = Symbol()
  id1 === id2

  ```

  * 심벌을 사용해 프로퍼티 정의
  ```js

  const id = Symbol("id")
  const tel = Symbol("telephone number")

  const member - {
    name : "kim",
    age : 25,
    [id] : 1235,
    [tel] : function(){
      alert(prompt("전화번호 : "));
    }
  }

  ```

  ```js

  for(item in member){
    console.log(`${item} : ${member[item]}`)
  }

  ```

  * 심벌키에 접근하기
  ```js

  member[id]
  member[tel]()

  ```

  </details>

  <details><summary>📖 전역 심벌 </summary>

  * 여러 곳에서 같이 사용할 수 있는 심벌

  * Symbol.for() 메서드
  
  ```js

  let tel = Symbol.for("tel")
  let phone = Symbol.for("tel")
  tel === phone

  ```

  * Symbol.keyFor() 메서드
  ```js

  Symbol.keyFor(phone)

  ```

  </details>

  <details><summary>📖 구조 분해 할당 </summary>

  * 말 그대로 주어진 자료의 구조를 분해하여 변수에 할당하는 기능입니다.

  * 배열 구조 분해 할당
  ```js

  const fruits = ["사과", "복숭아"]
  let apple = fruits[0]
  let peach = fruits[1]

  ```
  
  ```js

  let [apple, peach] = ["사과", "복숭아"]

  ```

  ```js

  const fruits = ["사과", "복숭아"]
  let [apple, peach] = fruits

  ```

  ```js

  apple
  peach

  ```

  ```js

  let [member1, member2] = []
  member1
  member2

  ```

  * 일부 값만 구조 분해 할당하기
  ```js

  let [spring, ,fall] = ["봄", "여름", "가을", "겨울"]
  spring
  fall

  ```

  * 나머지 변수를 사용해 구조 분해 할당하기
  ```js

  let [teacher, ...students] = ["Kim", "Lee", "Park", "Choi"]
  teacher
  students

  ```

  * 두 변수의 값 교환
  ```js

  let x = 10
  let y = 20

  ```

  </details>

  <details><summary>📖 객체 구조 분해 </summary>

  ```js

  const member = {
    name : "kim",
    age : 25
  }

  let {name, age} = number
  name
  age

  ```

  ```js

  let name, age
  {name, age} = {name : "Kim", age : 25}
  name
  age

  ```

  * 새로운 변수 이름 사용하기
  ```js

  const member = {
    name : "Kim",
    age : 25
  }
  let {name : userName, age} = member
  userName

  ```

  * 중첩된 객체 구조 분해하기
  ```js

  const student = {
    name : "도레미",
    score : {
      history : 85,
      science : 94
    },
    friends : ["Kim", "Lee", "Park"]
  }

  ```

  ```js

  let {
    name,
    score : {
      history,
      science
    },
    friends : [f1, f2, f3]
  } = students

  ```

  ```js

  let { name, score : { history, science }, friends : [f1, f2, f3] } = students

  ```

  ```js

  history
  f2

  ```

  </details>

  <details><summary>📖 배열 요소에 같은 함수 적용 </summary>

  * 각 배열 요소에 똑같은 함수를 실행 한 후 그 결과를 새로운 배열로 반환하는 메서드

  ```js

  let numbers = [1, 2, 3, 4, 5]
  let newNumbers = numbers.map(number => number * 2);
  newNumbers

  ```

  ```js

  map(함수(값, 인덱스))
  map(함수(값, 인덱스, 배열))

  ```

  ```js

  let numbers = [1, 2, 3, 4, 5]
  let newNumbers2 = numbers.map((number, index) => index + (number * 3));
  newNumbers2
  
  ```

  </details>

  <details><summary>📖 특정 조건으로 골라내기 </summary>

  * 이름에서 알 수 있듯이 특정 조건에 맞는 요소만 골라내는 메서드 입니다.

  ```js

  filter(함수(값))
  filter(함수(값, 인덱스))
  filter(함수(값, 인덱스, 배열))

  ```

  ```js

  let scores = [90, 35, 64, 88, 45, 92]
  highScores = scores.filter(scores => scores >= 85)
  
  ```

  ```js

  let scores = [90, 35, 64, 88, 45, 92]
  let highScores2 = scores.filter((scores, index) =>{
    if(score >= 85){
      console.log(`index : ${index}, score : ${score}`)
      return score
    }
  });
  
  ```

  </details>

  <details><summary>📖 값 하나로 누적하기 </summary>

  * 배열 원소에 차례대로 함수를 실행하여 하나의 결과값을 만듭니다.
  * 이렇게 결과값을 하나만 반환하므로 계산 결과를 하나의 변수에 계속 누적시키는데, 이것을 누산기 라고합니다.

  <table>
  <th></th><th>total</th><th>current</th><th>result</th>
  <tr>
    <td>첫 번째 실행</td><td>0</td><td>1</td><td>1</td>
  </tr>
  <tr>
    <td>두 번째 실행</td><td>1</td><td>2</td><td>3</td>
  </tr>
  <tr>
    <td>세 번째 실행</td><td>3</td><td>3</td><td>6</td>
  </tr>
  <tr>
    <td>네 번째 실행</td><td>6</td><td>5</td><td>10</td>
  </tr>
  <tr>
    <td>다섯 번째 실행</td><td>10</td><td>6</td><td>15</td>
  </tr>
  </table> <br/>

  ```js

  let numbers = [1, 2, 3, 4, 5]
  let result = numbers.reduce(
    (total, current) => total + current, 0
  );
  result
  
  ```

  </details>

  <details><summary>📖 맵과 셋이 등장한 이유 </summary>

  * 객체에서 키에는 문자열만 사용할 수 있습니다. 하지만 맵에서는 키에 모든 값을 사용할 수 있습니다.
  * 객체에는 여러 정보를 담을 수 있지만 프로퍼티 간에 순서가 없습니다. 하지만 맵과 셋에는 순서가 있습니다.
  * for문과 같은 반복문을 사용해서 객체의 프로퍼티를 반복할 수 없습니다. 하지만 맵과 셋에서는 for... of와 같은 반복문을 사용할 수 있습니다.
  * 객체에는 프로퍼티의 개수를 알려 주는 프로퍼티가 없습니다. 하지만 맵과 셋에는 별도의 프로퍼티가 있고, 이 외에도 객체보다 많은 메서드를 가지고 있습니다.

  </details>

  <details><summary>📖 맵이란?</summary>

  * 키와 값이 하나의 쌍으로 이루어져 있고, 여러개의 프로퍼티를 가지고 있는 자료 형태

  ```js

  let bag = new Map();
  bag.set("color", "red")

  ```

  ```js

  let myCup = new Map([
    ["color", "white"],
    ["haveHandle", true],
    ["material", "ceramic"],
    ["capacity", "300ml"],
  ])
  myCup

  ```

  * 맵에서의 체이닝
  ```js

  bag.set("type", "mini")
  bag.set("purpose", "daily")

  ```

  ```js

  bag.set("type", "mini").set("purpose", "daily")

  ```

  </details>

  <details><summary>📖 맵의 프로퍼티와 메서드 </summary>

  * `size` 맵 요소의 개수를 알려주는 프로퍼티
  `bag.size`
  * `set(키, 값)` 프로퍼티를 추가합니다.
  * `get(키)` 해당 키의 값을 반환합니다.
  `bag.get("color")`
  * `has(키)` 해당 키가 맵에 있는지 체크하고 true 또는 false로 반환
  `bag.has("color")`
  * `delete(키)` 해당 키가 있는 프로퍼티를 삭제
  ```js

  bag.delete("type")
  bag.delete("name")
  bag

  ```
  * `clear()` 맵의 모든 요소를 삭제합니다.
  `bag.color()`
  * `keys()` 각 요소의 키를 모아서 반환
  * `values()` 각 요소의 값을 모아서 반환
  * `entries()` [키, 값] 형태로 모든 요소를 반환

  ```js

  let myCup = new Map([
    ["color", "white"],
    ["haveHandle", true],
    ["material", "ceramic"],
    ["capacity", "300ml"],
  ])
  myCup.keys()

  ```

  ```js

  MapIterator {"color", "haveHandle", "material", "capacity"}

  ```

  ```js

  for(let key of myCup.keys()){
    console.log(key)
  }

  ```

  ```js

  for(let value of myCup.values()){
    console.log(value)
  }

  for(let entry of myCup.entris()){
    console.log(entry)
  }

  ```

  </details>

  <details><summary>📖 set이란? </summary>

  * 키 없이 여러 개의 값을 모아 놓은 것으로, 값이 중복되어도 상관 없습니다.

  ```js

  let numSet1 = new Set()
  numSet1.add("one")
  numSet1.add("two")

  ```

  ```js

  let numSet1 = new Set().add("one").add("two")

  ```

  ```js

  let numSet2 = new Set([1, 2, 3])
  numSet2
  let numSet3 = new Set([1, 2, 1, 3, 1, 5])
  numSet3

  ```

  </details>

  <details><summary>📖 set의 프로퍼티와 메서드 </summary>

  * `size` 셋 요소의 개수를 알려주는 프로퍼티
  * `add(값)` 셋에 값을 추가합니다.
  * `has(값)` 셋에 해당 값이 있는지 체크
  * `delete(키)` 셋에서 해당 값을 삭제
  * `clear()` 셋을 비웁니다.

  ```js

  let students = new Set()
  students.add("도레미")
  students.add("백두산")
  students.add("도레미")
  students

  ```

  ```js

  students
  students.add("백두산")
  students.add("한라산")
  students.delete("도레미")
  students
  students.clear()
  students

  ```

  ```js

  students.keys()
  students.values()
  students.entries()

  ```

  ```js

  let languages = new Set(["js", "c", "python", "c", "js"])
  for(let language of languages.values()){
    console.log(language)
  }

  ```

  </details>

</details>

# 11주차

## 📝 효율적으로 문자열과 배열 활용하기

<details><summary>📘 chapter 10 </summary>

  <details><summary>📖 원시 유형과 객체 </summary>

  * 단순히 값만을 가지고 있을 경우에는 '원시 유형',
  * 프로퍼티와 메서드를 가지고 있을 때는 '객체' 입니다.
  * 자바스크립트에서는 원시 유형이어도 프로퍼티와 메서드를 사용할 수 있습니다.

  </details>

  <details><summary>📖 문자열의 길이 </summary>

  * length 프로퍼티

  ```js
  
  let str = "Good morning!";
  let greeting = "안녕하세요?";
  str.length
  greeting.length

  ```

  </details>

  <details><summary>📖 charAt() 메서드 </summary>

  * 문자열에서 특정 위치의 문자를 가져오려면 charAt() 함수를 사용합니다.

  ```js
  
  let str = "Good morning!";
  str.charAt(3)
  str[5]

  ```

  </details>

  <details><summary>📖 indexOf() 메서드 </summary>

  * 문자열에서 부분 문자열이 어디에 있는지 검색할 때 indexOf() 메서드를 사용하면 편리합니다.

  ```js
  
  let str1 = "Good morning, everyone. Beautiful morning.";
  str1.indexOf("morning"); // 5
  str1.indexOf("evening"); // -1

  ```

  </details>

  <details><summary>📖 startsWith() 메서드 </summary>

  * 문자열이 특정 문자나 문자열로 시작하는지 확인해야 할 때 startsWith() 메서드를 사용할 수 있습니다.

  ```js
  
  let str2 = "Hello, everyone.";
  str2.startsWith("Hello"); // true
  str2.startsWith("hello"); // false
  str2.startsWith("He");    // true
  str2.startsWith("Hello, ev"); // true

  str2.startsWith("el", 1); // true
  str2.startsWith("o", 4); // true

  ```

  </details>

  <details><summary>📖 endsWith() 메서드 </summary>

  * 문자열이 특정 문자나 문자열로 끝나는지 확인해야 할 때 endsWith() 메서드를 사용할 수 있습니다.

  ```js
  
  str2.endsWith("everyone"); // true
  str2.endsWith("Everyone"); // false
  str2.endsWith("one."); // true
  str2.endsWith("lo. everyone"); // false

  ```

  </details>

  <details><summary>📖 includes() 메서드 </summary>

  * 문자열이 특정 문자나 문자열이 포함되었는지 확인해야 할 때 includes() 메서드를 사용할 수 있습니다.

  ```js
  
  str2.includes("every") // true

  ```

  </details>

  <details><summary>📖 trim(), trimStart(), trimEnd() 메서드 </summary>

  * 문자열이 특정 문자나 문자열이 포함되었는지 확인해야 할 때 includes() 메서드를 사용할 수 있습니다.

  ```js
  
  let str3 = " ab cd ef ";
  str3.trim()
  str3.trimStart()
  str3.trimEnd()

  ```

  </details>

  <details><summary>📖 toUpperCase(), toLowerCase() 메서드 </summary>

  * 영문자 문자열의 경우에는 모두 대문자, 또는 모두 소문자로 변경 가능합니다.

  ```js
  
  let str4 = "Good morning."
  str4.toUpperCase()
  str4.toLowerCase()

  ```

  </details>

  <details><summary>📖 substring() 메서드 </summary>

  * 시작 위치부터 끝 위치의 직전까지 추출해서 반환

  ```js
  
  str4.substring(5) // "morning"

  ```

  </details>

  <details><summary>📖 slice() 메서드 </summary>

  * 시작 위치만 지정하면 해당 위치부터 끝까지
  * 시작 위치와 끝 위치를 함께 지정하면 시작 위치 부터 끝 위치 직전 까지 추출

  ```js
  
  str4.slice(0, 4) // "Good"
  str4.slice(-5, 12) // "Good morning"

  ```

  </details>

  <details><summary>📖 split() 메서드 </summary>

  * 새로운 배열을 반환

  ```js
  
  str5 = "Hello everyone";
  array1 = str5.split(" "); // ["Hello, everyone"]
  array2 = str5.split(""); // ["H","e","l","l","o", "e","v",'e","r","y","o","n","e"]

  ```

  </details>

  <details><summary>📖 정규 표현식 작성하기 </summary>

  * 자바스크립트에서 정규 표현식을 만들 때는 RegExp 객체를 사용할 수도 있고, 간단히 슬래시를 사용하여 표현식으로 사용할 수도 있습니다.

  ```js
  
  let regexp = /\d{3}/
  regexp.test("Hello")
  regexp.test("123")

  ```

  </details>

  <details><summary>📖 정규 표현식과 메서드 </summary>

  <table>
  <th>정규표현식</th><th>기능</th>
  <tr>
    <td>정규식.test(문자열)</td><td>정규 표현식에 일치하는 부분 문자열이 있으면 true, 없으면 false를 반환합니다.</td>
  </tr>
  <tr>
    <td>정규식.exec(문자열)</td><td>정규 표현식에 일치하는 부분 문자열이 있으면 결과값을 배열 형태로, 없으면 null을 반환합니다.</td>
  </tr>
  </table> <br/>

  <table>
  <th>문자열 메서드</th><th>기능</th>
  <tr>
    <td>match(정규식)</td><td>문자열에서 정규 표현식에 일치하는 부분을 찾습니다.</td>
  </tr>
  <tr>
    <td>replace(정규식, 바꿀 문자열)</td><td>문자열에서 정규 표현식에 맞는 부분 문자열을 찾아서 새로운 문자열로 바꿉니다.</td>
  </tr>
  </table>

  </details>

  <details><summary>📖 정규 표현식의 플래그 </summary>

  <table>
  <th>플래그</th><th>기능</th>
  <tr>
    <td>i</td><td>영문자의 대소문자를 구별하지 않고 검색합니다.</td>
  </tr>
  <tr>
    <td>g</td><td>패턴과 일치하는 것을 모두 찾습니다. g 패턴이 없으면 일치하는 패턴 중 첫 번째 패턴만 반환합니다.</td>
  </tr>
  <tr>
    <td>m</td><td>문자열의 행이 바뀌어도 검색합니다.</td>
  </tr>
  </table> <br/>

  </details>

  <details><summary>📖 문자 클래스 사용하기 </summary>

  <table>
  <th>클래스의 종류</th><th>기호</th><th>설명</th>
  <tr>
    <td>숫자 클래스</td><td>\d</td><td>0 ~ 9 사이의 숫자</td>
  </tr>
  <tr>
    <td>숫자 클래스</td><td>\D</td><td>숫자가 아닌 모든 문자</td>
  </tr>
  <tr>
    <td>공백 클래스</td><td>\s</td><td>공백, 탭, 줄바꿈 등</td>
  </tr>
  <tr>
    <td>공백 클래스</td><td>\S</td><td>공백이 아닌 모든 문자</td>
  </tr>
  <tr>
    <td>단어 클래스</td><td>\w</td><td>단어에 들어가는 문자, 숫자와 언더바 포함</td>
  </tr>
  <tr>
    <td>단어 클래스</td><td>\W</td><td>단어에 들어가지 않는 모든 문자</td>
  </tr>
  </table> <br/>

  </details>

  <details><summary>📖 문자열의 시작과 끝 체크 </summary>

  * 정규 표현식에서 문자열의 시작과 끝 부분을 체크할 때는 ^기호와 $기호를 사용합니다.
  * 이중에서 ^는 문자열의 시작, $는 문자열의 끝을 나타내는데, 이 기호를 앵커 기호 라고도 합니다.

  ```js

  let hello = "Hello, everyone"
  /^H/.test(hello);
  /^h/.test(hello);

  ```

  ```js

  let hello = "Hello, everyone"
  /one.$/.test(hello);
  /e.$/.test(hello);
  /one$/.test(hello);

  ```

  </details>

  <details><summary>📖 반복 검색하기 </summary>

  <table>
  <th>표현식</th><th>기능</th>
  <tr>
    <td>패턴{n}</td><td>패턴이 n번 반복되는 것을 찾습니다.</td>
  </tr>
  <tr>
    <td>패턴{n,}</td><td>패턴이 최소 n번 이상 반복되는 것을 찾습니다.</td>
  </tr>
  <tr>
    <td>패턴{m,n}</td><td>패턴이 최소 m번 이상, 최대 n번 이하로 반복되는 것을 찾습니다.</td>
  </tr>
  </table> <br/>

  </details>

  <details><summary>📖 OR 검색하기 </summary>

  ```js

  let str2 = "ES2015(ES6) is powerful"
  let regexp - /ES2015|ES6/
  regexp.test(str2)

  ```

  </details>

  <details><summary>📖 조건에 일치하는 문자열 찾기 </summary>

  <table>
  <th>표현식</th><th>기능</th><th>사용 예</th>
  <tr>
    <td>{ }</td><td>식의 시작과 끝</td><td>[a-z] : a 부터 z 까지</td>
  </tr>
  <tr>
    <td>^x</td><td>x로 시작하는 문자열, 대괄호 안에 ^가 있으면 NOT의 의미가 됩니다.</td><td>^[0-9]: 숫자로 시작하는 것, [^0-9]: 숫자가 아닌 것</td>
  </tr>
  <tr>
    <td>x$</td><td>x로 끝나는 문자열</td><td>e$ : e로 끝나는 것</td>
  </tr>
  <tr>
    <td>x+</td><td>x가 한 번 이상 반복되는 문자열</td><td>o+ : o, oo 처럼 o가 한번 이상 반복 되는 것</td>
  </tr>
  <tr>
    <td>x?</td><td>x가 0번 이상 반복되는 문자열</td><td>x* : y, xy, xxy 처럼 x가 없거나 어러 번 나타나는 것</td>
  </tr>
  <tr>
    <td></td><td>문자 하나</td><td>[x,z] " xyz나 xAz처럼 x와 z사이에 문자가 하나 있는 것</td>
  </tr>
  </table> <br/>

  </details>

  <details><summary>📖 자주 사용하는 정규 표현식 </summary>

  <table>
  <th>설명</th><th>정규 표현식</th>
  <tr>
    <td>숫자만 가능</td><td>/^[0-9]+$/</td>
  </tr>
  <tr>
    <td>양의 정수</td><td>/^[1-9]\d*$</td>
  </tr>
  <tr>
    <td>음의 정수</td><td>/^\-[1-9]\d*$</td>
  </tr>
  <tr>
    <td>영문자만 가능</td><td>/^[a-zA-Z]+$/</td>
  </tr>
  <tr>
    <td>숫자와 영문자만 가능</td><td>/^[a-zA-Z0-9]+$/</td>
  </tr>
  <tr>
    <td>한글만 가능</td><td>/^[가-힣]+$/</td>
  </tr>
  <tr>
    <td>한글과 영문자만 가능</td><td>/^[가-힣|a-zA-Z]+$/</td>
  </tr>
  <tr>
    <td>길이가 5~10개</td><td>/^.{5,10}$/</td>
  </tr>
  <tr>
    <td>메일 주소 체크</td><td>/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/</td>
  </tr>
  <tr>
    <td>전화번호 체크</td><td>/(\d{3}).*(\d{3}).*(\d{4})/</td>
  </tr>
  <tr>
    <td>확장자를 가진 그림 파일</td><td>/([^\s]+(?=\.(jpg|gif|png))\.\2)/</td>
  </tr>
  <tr>
    <td>1부터 n 사이의 번호</td><td>/^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^n$/</td>
  </tr>
  <tr>
    <td>암호 체크</td><td>/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/</td>
  </tr>
  </table> <br/>

  </details>

  <details><summary>📖 split() 메서드 사용 </summary>

  ```js

  str5 = "Hello, everyone"
  array2 = str5.split("");

  ```

  </details>

  <details><summary>📖 전개 연산자 </summary>

  ```js

  array3 = [...str5]

  ```

  </details>

  <details><summary>📖 Array.from() 메서드 사용하기 </summary>

  ```js

  array4 = Array.from(str5)

  ```

  </details>

  <details><summary>📖 join() 메서드 </summary>

  * 앞에서 문자 배열로 전환해서 저장했던 array4를 str5라는 문자열로 바꿀 수 있습니다.

  ```js

  str6 = array4.join("")

  ```

  </details>

  <details><summary>📖 빈 배열을 만들고 값 할당 </summary>

  ```js

  let season = [];
  season[0] = "spring";
  season[1] = "summer";
  season 

  ```

  </details>

  <details><summary>📖 리터럴 표기법으로 만들기 </summary>

  ```js

  let pets = ["dog", "cat", "parrot"];
  pets

  ```

  </details>

  <details><summary>📖 Array 객체의 인스턴스 만들기 </summary>

  ```js

  let fruits = new Array("사과", "복숭아", "포도");
  fruits

  ```

  </details>

  <details><summary>📖 배열값 수정하기와 추가하기 </summary>

  ```js

  pets[1] = "hamster";
  pets

  ```

  ```js

  let fruits = new Array("사과", "복숭아", "포도");
  fruits[4] = "배"
  fruits
  fruits[3] // undefined

  ```

  </details>

  <details><summary>📖 forEach() 문 </summary>

  * 인수가 1개인 forEach() 문

  ```js

  let animals = ["lion", "bear", "bird"]
  animals.forEach(animal => {
    console.log(animal)
  })

  ```

  * 인수가 2개인 forEach() 문

  ```js

  animals.forEach((animal, index) => {
    console.log(`animals[${index}] : ${animal}`);
  });
  animals[0] : lion
  animals[1] : bear
  animals[2] : bird

  ```

  * 인수가 3개인 forEach() 문

  ```js

  animals.forEach((animal, index, array) => {
    console.log(`[${array}][${index}] : ${animal}`);
  });
  [lion, bear, bird][0] : lion
  [lion, bear, bird][1] : bear
  [lion, bear, bird][2] : bird

  ```

  </details>

  <details><summary>📖 concat() 메서드 </summary>

  ```js

  let vegitable = ["양상추", "토마토", "피클"]
  let meat = ["불고기"]

  let meatBurger = vegitable.concat(meat, "빵")
  meatBurger

  ```

  ```js

  let meatBurger2 = meat.concat("빵", vegitable)
  meatBurger2

  ```

  </details>

  <details><summary>📖 전개 연산자 </summary>

  ```js

  let vegitable = ["양상추", "토마토", "피클"]
  let cheese = ["모짜렐라", "슈레드"]

  let cheeseBurger = ["빵", ...vegitable, ...cheese]
  cheeseBurger

  ```

  ```js

  let meatBurger2 = meat.concat("빵", vegitable)
  meatBurger2

  ```

  </details>

  <details><summary>📖 reverse() 메서드 </summary>

  * 배열 요소의 순서를 거꾸로 바꾸는 메서드

  ```js

  let numbers = [6, 9, 3, 21, 18]
  numbers.reverse()

  ```

  </details>

  <details><summary>📖 sort() 메서드 </summary>

  * 배열 요소를 문자열로 보고 정렬

  ```js

  let week = ["sum", "mon", "tue"]
  let values = [5, 20, 3, 11, 4, 15]
  week.sort()
  values.sort()

  ```

  ```js

  let values = [5, 20, 3, 11, 4, 15]
  values.sort(function(a,b){
    if( a > b ) return 1;
    if( a < b ) return -1;
    if( a === b ) return 0; 
  })

  ```

  ```js

  let values = [5, 20, 3, 11, 4, 15]
  values.sort(function(a,b){
    return a - b;
  })

  ```

  </details>

  <details><summary>📖 pop() & push() 메서드 </summary>

  * pop() 메서드는 배열의 맨 끝에 있는 값을 제거
  * push() 메서드는 배열의 맨 앞부분에 지정한 값을 추가

  ```js

  let animals = ["lion", "bear", "bird"]
  animals.pop()
  animals

  ```

  ```js

  animals.push("tiger")
  animals

  ```

  </details>

  <details><summary>📖 shift() & unshift() 메서드 </summary>

  ```js

  let fruits = ["apple", "banana", "pear"]
  fruits.shift() // "apple"
  fruits         // ["banana", "pear"]

  ```

  ```js

  fruits.unshift("cherry") // 3
  fruits                   // ["cherry", "banana", "pear"]

  ```

  </details>

  <details><summary>📖 splice() 메서드 </summary>

  * 특정 위치부터 끝까지 요소 제거

  ```js

  let subjects = ["html", "css", "javascript", "react", "typescript"]
  subjects.splice(2)
  subjects

  ```

  * 특정 위치에서 원하는 개수만큼 요소 제거하기

  ```js

  let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
  let weekday = week.splice(1, 5)
  weekday
  week

  ```

  * 특정 위치에 요소 추가하기

  ```js

  let brunch = ["egg", "milk", "apple", "banana"]
  brunch.splice(2, 0, "coffee", "bread")
  brunch

  ```

  * slice() 메서드

  ```js

  let colors = ["red", "green", "blue", "white", "black"]
  colors.slice(2)
  colors

  ```

  ```js

  let colors2 = colors.slice(1, 4)
  colors2
  colors

  ```


  </details>

</details>


# 10주차

## 📝 자바스크립트 객체 만들기

<details><summary>📘 Chapter 09 </summary>

  <details><summary>📘 자바스크립트에서 객체란? </summary>

  * 관련된 정보와 동작을 함께 모아놓은 것

  </details>

  <details><summary>📖 내장 객체 </summary>

  * 자주 사용하는 요소들이 자바스크립트에 미리 객체로 정의 되어 있는것
  * (ex Number, Boolean, Array, Math ...)

  </details>

  <details><summary>📖 DOM </summary>

  * 웹 문서 자체도 객체이고 웹 문서에 포함된 이미지와 링크, 텍스트 필드 등은 모두 이미지 객체, 링크 객체, 폼 객체처럼 각각 별도의 객체 입니다.

  </details>

  <details><summary>📖 웹 브라우저 객체 </summary>

  * 웹 브라우저에서 사용하는 정보도 객체러 정의되어 있습니다.

  </details>

  <details><summary>📖 사용자 정의 객체 </summary>

  * 자바스크립트에 미리 정의된 객체 뿐만 아니라 사용자가 필요할 때 마다 자신의 객체를 정의하여 사용할 수 있습니다.

  </details>

  <details><summary>📘 사용자 정의 객체 만들기 </summary>

  * 객체는 여러 개의 프로퍼티로 구성되어 있는데, 프로퍼티는 '키 : 값' 형태를 가지고 있습니다. 프로퍼티의 값이 함수일 경우 이것을 '메서드'라고 부릅니다.

  </details>

  <details><summary>📖 키와 값 </summary>

  * 객체를 만들 때는 객체의 이름 다음에 중괄호를 사용하고, 중괄호 사이에 '키 : 값' 형삭으로 필요한 프로퍼티를 나열합니다.

  ```js

  객체명 {
    키1 : 값1,
    키2 : 값2,
  }

  ```

  </details>

  <details><summary>📖 객체의 프로퍼티에 접근 </summary>

  * 객체의 프로퍼티는 점 표기법이나 괄호 표기법을 사용합니다.
  * 점 표기법은 객체 이름 다음에 점을 붙이고 프로퍼티 키를 사용하는 방법입니다.
  * 괄호 표기법은 객체 이름 다음에 대괄호와 함께 프로퍼티키를 사용합니다.
  * 점 표기법을 사용할 때는 문자열인 프로퍼티 키에 큰따옴표를 붙이지 않지만, 괄호 표기법을 사용할 경우에는 프로퍼티키의 문자열에 큰 따옴표를 붙여야 합니다.

  ```js

  book1.title
  book1["title"]

  ```

  </details> 

  <details><summary>📖 프로퍼티 수정하고 추가하기 </summary>

  * 객체를 만든 후 이미 있던 프로퍼티를 수정할수 있고, 새로이 추가할 수도 있습니다.

  ```js

  book1.author = "고경희";
  book1.pages = 50
  book1

  ```

  </details>

  <details><summary>📖 빈 객체 작성 후 프로퍼티 추가 </summary>

  * 객체는 중간에 프로퍼티를 추가할 수 있으므로 처음에 빈 객체를 만든 후 필요할 떄마다 프로퍼티를 추가할 수 있습니다.

  </details>

  <details><summary>📖 프로퍼티 삭제 </summary>

  * delete 명령 다음에 객체의 키를 지정하면 해당 키가 있는 프로퍼티를 삭제합니다.

  ```js

  delete book2.pages

  ```

  </details>

  <details><summary>📖 객체 중첩하기 </summary>

  * 객체 안에 또 다른 객체를 넣을 수 있습니다. 즉, 둘 이상의 객체가 중첩되는 것 이죠

  ```js

  let student = {
    name : "Doremi",
    score : {
        history : 85,
        science : 94,
        average : function(){
            return (this.history + this.science) / 2
        }
      }
    }

  student.score.history;
  student.score.average();

  ```

  </details>

  <details><summary>📘 객체의 메서드 정의하기 </summary>

  ```js

  let book3 = {
    title = "점프 투 파이썬",
    pages : 360,
    buy : function(){
      console.log("이 책을 구입했습니다.");
    }
  }

  ```

  </details>

  <details><summary>📖 메서드와 this </summary>

  * 메서드에 따라서는 객체 안에 있는 프로퍼티값을 사용해야 할 경우도 있는데, 이때 this 라는 예약어를 사용합니다.

  ```js

  let book4 = {
    title = "javascript",
    pages : 500,
    done : false,
    finish : function(){
      book4.done === false ? console.log("읽는 중") : console.log("완독");
    }
  }
  book4.finish()

  ```

  </details>

  <details><summary>📘 객체 복사하기 </summary>

  * 객체를 사용할 때 객체는 참조 형태로 값을 전달합니다.

  </details>

  <details><summary>📖 원시 유형의 자료 복사하기 </summary>

  * 숫자나 문자열과 같은 원시 유형 자료는 값을 전달 합니다.

  ```js

  let number1 = 100
  let number2 = number1
  number1
  number2

  ```

  </details>

  <details><summary>📖 참조 주소 전달하기 </summary>

  ```js

  let bag1 = {
    color : blue,
    width : 30,
    height : 50,
  }
  let bag2 = bag1
  bag1
  bag2

  ```

  </details>

  <details><summary>📘 생성자 함수로 객체 만들기 </summary>

  * 객체의 틀을 만들 때 함수를 사용하는데, 이 함수를 '생성자 함수'라고 합니다.

  </details>

  <details><summary>📖 생성자 함수 정의 </summary>

  ```js

  function 함수명(매개변수) {
    this.키1 : 값1,
    this.키2 : 값2,
    this.메서드1 : function() { ... },
    this.메서드2 : function() { ... },
  }

  ```

  </details>

  <details><summary>📖 new 예약어를 사용해 인스턴스 만들기 </summary>

  ```js

  let book1 = new Book("웹 표준의 정석", 648, false);
  let book2 = new Book("점프 투 파이썬", 360, true);

  console.log(`${book1.title} - ${book1.pages}쪽 - ${book1.finish()}`);
  console.log(`${book2.title} - ${book2.pages}쪽 - ${book2.finish()}`);

  ```

  </details>

  <details><summary>📘 클래스를 사용해 객체 만들기 </summary>

  * 자바스크립트의 클래스는 정확한 클래스 개념이 아니라 생성자 함수를 좀 더 표현하기 쉽게 바꾼, 선택적 슈거 입니다.

  </details>

  <details><summary>📖 클래스 선언 </summary>

  ```js

  class 클래스명 {
    constructor(){
      프로퍼티1,
      프로퍼티2,
    }
    메서드1() { ... }
    메서드2() { ... }
  }

  ```

  </details>

  <details><summary>📘 for...in 사용하기 </summary>

  ```js

  let bag = {
    type : "backpack",
    color : "blue",
    size : 15,
  }

  for(key in bag){
    console.log(`${key}`);
  }
  for(key in bag){
    console.log(`${key} : ${bag[key]}`);
  }

  ```

  </details>

  <details><summary>📘 Object 객체 메서드 사용하기 </summary>

  ```js

  let book1 = {
    title : "웹 표준의 정석",
    pages : 648,
    buy : function(){
      console.log("이 책을 구입했습니다.");
    }
  }

  let keys = Object.keys(book1);
  console.log(keys);

  let values = Object.values(book1);
  console.log(values);

  let entries = Object.entries(book1);
  console.log(entries);

  ```

  </details>

</details>

# 7주차

## 📝 중간고사 이전 복습

<details><summary>📘 Chapter 04 </summary>

  <details><summary>📖 웹 요소에 접근 하기 </summary>

  * 선택자를 사용하여 웹 요소에 접근할 때는 querySelector() 함수나 querySelectorAll() 함수를 사용하는데, 이 함수들은 document 객체에 포함되어 있습니다.

  * querySelector()는 1개의 요소만 가져옵니다.
  * querySelector()함수에서 class 선택자나 타입 선택자를 사용하면 적용된 여러 개의 요소 중 첫 번째 요소만 가져옵니다.

  * querySelectorAll()함수는 여러 개의 요소를 가져올 때 사용합니다.

  </details>

  <details><summary>📖 웹 요소의 내용을 가져오고 수정하기 </summary>

  * innerText
  * innerHtml
  * textContent

  </details>

  <details><summary>📖 CSS 속성에 접근하고 수정하기 </summary>

  * 자바스크립트를 사용하여 각 요소의 스타일 정보를 가져올 수도 있고, 원하는 스타일 속성을 바꿀 수도 있습니다.
  * CSS 속성에 접근하려면 요소에 접근한 후 예약어 .style과 CSS 속성을 사용해야 합니다.

  * 요소.style.속성명

  </details>

  <details><summary>📖 ClassList 프로퍼티 살펴보기 </summary>

  * 요소에 적용한 클래스 스타일을 모두 모아 놓은 프로퍼티 입니다.

  </details>

  <details><summary>📖 클래스 스타일을 추가하고 삭제하기 </summary>

  * 클래스 스타일을 추가할 때에는 add() 함수를, 삭제할 때는 remove() 함수를 사용해야 합니다.

  * 요소.classList.add(클래스명)
  * 요소.classList.remove(클래스명)

  * contains() 함수는 클래스 리스트에 특정 클래스가 있는지 확인하는 함수 입니다.

  </details>

  <details><summary>📖 폼 요소에 접근하고 값을 가져오는 방법 </summary>

  * id나 class 값을 사용하여 폼 요소에 접근할 수 있습니다.
  * 자바스크립트에서 value 프로퍼티를 사용하면 폼 요소 중 텍스트 필드나 이메일 필드에서 사용자가 입력한 값을 가져올 수 있습니다.

  * 폼 요소에 id나 class 속성이 없고 name 속성만 있으면 name 식별자를 사용해 폼 요소에 접근 할 수 있습니다.

  * 위 3가지 모두 없다면 폼 배열을 사용할 수 있습니다.
  * <form> 태그 안에 있는 요소에 접근할 때는 해당 폼 안에 있는 모든 요소를 가져오는 elements 속성을 사용합니다.

  </details>

  <details><summary>📖 선택 목록과 항목에 접근하기 </summary>

  * 폼에는 텍스트 필드 뿐만 아니라 다양한 요소들이 있는데, 목록을 선텍목록 이라고 합니다.
  * 선택 목록은 <option> 태그를 사용하여 여러 개의 항목을 한꺼번에 지정한 후 목록을 펼쳐서 원하는 항목을 선택할 수 있습니다.

  * 선택 목록에 id값이 있으면 querySelector() 함수를 사용하여 선택 목록에 접근할 수 있습니다.

  </details>

</details>

<details><summary> 📘 DOM 트리와 노드리스트 </summary>

  <details><summary>📖 DOM 트리와 노드 </summary>

  * DOM은 웹 문서의 구조를 부모 노드와 형제 노드처럼 계층 구조로 표현할 수 있습니다.
  * DOM에는 단순히 태그에 해당하는 요소 노드 뿐만 아니라 여러 종류의 노드가 있습니다.

  * 모든 HTML 태그는 요소 노드가 됩니다.
  * HTML 태그에서 사용하는 텍스트 내용은 자식 노드인 텍스트 노드가 됩니다.
  * HTML 태그에 있는 속성은 모두 자식 노드인 속성노드가 됩니다.
  * 주석은 주석노드가 됩니다.

  </details>

  <details><summary>📖 노드리스트 </summary>

  * DOM에 접근할 때 querySelectorAll() 메서드를 사용하면 여러 개의 노드를 한꺼번에 가져올 수 있는데, 이렇게 가져온 다양한 노드 정보를 저장한 것을 노드 리스트 라고 합니다.
  * 노드 리스트는 배열과 비슷하게 생겼고 배열처럼 사용할 수 있지만 배열은 아닙니다.
  * 노드 리스트는 배열과 비슷하게 인덱스를 사용해 노드 리스트 에서 특정 위치의 노드에 접근 할 수있습니다.

  </details>

  <details><summary>📖 내용이 있는 텍스트 노드 추가 </summary>

  * 내용만 있는 새로운 텍스트 노드를 추가하는 것은 간단합니다.
  * 내용이 있는 텍스트 노드와 태그가 있는 요소 노드를 새로 만들어서 연결하고, 마지막에 웹 문서에서 원하는 위치에 추가하면 됩니다.

  </details>

  <details><summary>📖 요소 노드 만들기 </summary>

  * 요소 노드를 만들 때 createElement()메서드를 사용하는데, 소괄호 안의 요소에 해당하는 요소 노드를 만듭니다.

  * document.createElement(요소명)

  </details>

  <details><summary>📖 텍스트 노드 만들기 </summary>

  * 새로운 요소 노드를 만들었다면 내용을 담고 있는 텍스트 노드를 만들어서 요소 노드의 자식 노드로 연결해야 합니다.

  * document.createTextNode(요소명)

  </details>

  <details><summary>📖 자식 노드 연결하기 </summary>

  * 텍스트 노드를 요소 노드의 자식 노드로 추가할 때 사용하는 메서드 입니다.
  * 기존의 자식 노드가 있을 경우 자식 노드중 맨 끝에 추가됩니다.

  * document.createappendChild(자식 노드)

  </details>

  <details><summary>📖 속성값이 있는 노드 추가 </summary>

  * createElement() 메서드
  * createAttribute() 메서드
  * appendChild() 메서드

  </details>

  <details><summary>📖 기존 노드의 앞에 새 요소 추가하기 </summary>

  * insertBefore() 메서드를 사용하면 특정 요소를 기준으로 그 앞에 새로운 요소를 추가할 수 있습니다.

  * insertBefore(새 노드, 기준 노드)

  </details>

  <details><summary>📖 remove() 메서드 </summary>

  * 삭제하려는 요소에서 사용하는 메서드
  * r요소.remove()

  * removeChild() 메서드는 메서드를 사용하는 자신이 아닌 자식 노드를 삭제합니다.
  * 이 메서드를 사용하려면 먼저 부모 노드를 찾아야 하고 그 후에 자식 노드를 삭제해야 합니다.

  </details>

  <details><summary>📖 parentNode 프로퍼티 </summary>

  * parentNode는 현재 노드의 부모 노드에 접근해서 부모 노드의 요소 노드를 반환하는 프로퍼티입니다.

  * 노드.parentNode

  </details>

  <details><summary>📖 removeChild() 메서드 </summary>
  </details>

  <details><summary>📖 this를 사용시 주의할 점 </summary>

  * 이벤트 리스너에서 function() {...}에 this를 사용하면 this는 이벤트가 발생한 노드를 가리킵니다.
  * 즉, 목록의 항목 중 첫 번째 항목을 클릭하면 this에는 첫 번째 항목이 됩니다.
  * 하지만 화살표 함수에서 사용한 this는 window 객체를 가리킵니다.
  * window 객체는 DOM의 최상위 객체이므로 클릭한 대상을 this라는 예약어로 사용하려면 화살표 함수가 아닌 익명 함수 형식으로 지정해야 합니다.

  </details>

  <details><summary>📖 내장 객체 </summary>

  * 사용자가 손쉽게 가져와서 사용할 수 있도록 미리 만들어진 객체 입니다.

  </details>

  <details><summary>📖 window 객체 </summary>

  * window 객체에는 웹 브라우저 창과 관련된 여러 가지 프로퍼티와 메서드가 있습니다.

  <table>
    <th>프로퍼티</th><th>기능</th>
    <tr>
      <td>document</td><td>웹 브라우저 창에 표시된 웹 문서에 접근할 수 있습니다.</td>
    </tr>
    <tr>
      <td>frameElement</td><td>현재 창이 다른 요소 안에 포함되어 있으면 해당 요소를, 포함되어 있지 않으면 null을 반환합니다.</td>
    </tr>
    <tr>
      <td>innerHeight</td><td>내용 영역의 높이</td>
    </tr>
    <tr>
      <td>innerWidth</td><td>내용 영역의 너비</td>
    </tr>
    <tr>
      <td>localStorage</td><td>웹 브라우저 창에서 데이터를 저장하는 로컬 스토리지에 접근합니다.</td>
    </tr>
    <tr>
      <td>location</td><td>window 객체의 위치/현재 URL을 표시합니다.</td>
    </tr>
      <tr>
      <td>name</td><td>웹 브라우저 창의 이름을 가져오거나 수정합니다.</td>
    </tr>
      <tr>
      <td>outerHeight</td><td>웹 브라우저 창의 바깥쪽 높이</td>
    </tr>
      <tr>
      <td>outerWidth</td><td>웹 브라우저 창의 바깥쪽 너비</td>
    </tr>
      <tr>
      <td>pageXOffser</td><td>스크롤했을 때 수평으로 이동하는 픽셀 수로, scrollX와 같습니다.</td>
    </tr>
      <tr>
      <td>pageYOffset</td><td>스크롤했을 때 수평으로 이동하는 픽셀 수로, scrollY와 같습니다.</td>
    </tr>
      <tr>
      <td>parent</td><td>현재 창이나 서브 프레임의 부모</td>
    </tr>
      <tr>
      <td>screenX</td><td>웹 브라우저 창의 왼쪽 테두리가 모니터의 왼쪽 테두리에서부터 떨어져 있는 거리</td>
    </tr>
      <tr>
      <td>screenY</td><td>웹 브라우저 창의 왼쪽 테두리가 모니터의 위쪽 테두리에서부터 떨어져 있는 거리</td>
    </tr>
      <tr>
      <td>scrollX</td><td>스크롤했을 때 수평으로 이동하는 픽셀 수</td>
    </tr>
      <tr>
      <td>scrollY</td><td>스크롤했을 때 수직으로 이동하는 픽셀 수</td>
    </tr>
      <tr>
      <td>sessionStroge</td><td>웹 브라우저 창에서 데이터를 저장하는 세션 스토리지에 접근합니다.</td>
    </tr>
  </table>

  </details>

  <details><summary>📖 window 객체의 메서드 </summary>

  * 대화창이나 웹 브라우저 창을 열 수도 있고, 웹 브라우저 창의 크기/위치를 알아내거나 지정할 수도 있습니다.

  <table>
    <th>메서드</th><th>기능</th>
    <tr>
      <td>alert()</td><td>알림 창을 표시합니다.</td>
    </tr>
    <tr>
      <td>blur()</td><td>창에서 포커스를 제거합니다.</td>
    </tr>
    <tr>
      <td>close()</td><td>현재 창을 닫습니다.</td>
    </tr>
    <tr>
      <td>confirm()</td><td>[확인] 버튼과 [취소] 버튼이 있는 확인 창을 표시합니다.</td>
    </tr>
    <tr>
      <td>focus()</td><td>현재 창에 포커스를 맞춥니다.</td>
    </tr>
    <tr>
      <td>moveBy()</td><td>현재 창을 지정한 크기만큼 이동합니다.</td>
    </tr>
      <tr>
      <td>moveTo()</td><td>현재 창을 지정한 좌표로 이동합니다.</td>
    </tr>
      <tr>
      <td>open()</td><td>새로운 창을 엽니다.</td>
    </tr>
      <tr>
      <td>postMessage()</td><td>다른 창으로 메세지를 전달합니다.</td>
    </tr>
      <tr>
      <td>print()</td><td>현재 문서를 인쇄합니다.</td>
    </tr>
      <tr>
      <td>prompt()</td><td>프롬프트 창에 입력한 텍스트를 반환합니다.</td>
    </tr>
      <tr>
      <td>resizeBy()</td><td>지정한 크기만큼 현재 창의 크기를 조절합니다.</td>
    </tr>
      <tr>
      <td>resizeTo()</td><td>웹 브라우저 창의 크기를 지정한 크기만큼 늘리거나 줄입니다.</td>
    </tr>
      <tr>
      <td>scroll()</td><td>문서에서 특정 위치로 스크롤 합니다.</td>
    </tr>
      <tr>
      <td>scrollBy()</td><td>지정한 크기만큼씩 스크롤 합니다.</td>
    </tr>
      <tr>
      <td>scrollTo()</td><td>지정한 위치까지 한 번에 스크롤 합니다.</td>
    </tr>
      <tr>
      <td>setCursor()</td><td>현재 창의 커서를 변경합니다.</td>
    </tr>
    <tr>
      <td>showModalDialog()</td><td>모달 창을 엽니다.</td>
    </tr>
    <tr>
      <td>sizeToContent()</td><td>내용에 맞게 창의 크기를 맞춥니다.</td>
    </tr>
    <tr>
      <td>stop()</td><td>웹 문서 가져오기를 멈춥니다.</td>
    </tr>
  </table>
  </details>

  <details><summary>📖 window 객체의 내부 살펴보기 </summary>

  * 최상위 객체이므로 가지고 있는 프로퍼티와 메서드가 매우 많습니다.

  </details>

  <details><summary>📖 팝업 창 만들기 </summary>

  * window.open(경로, 창 이름, 창 옵션)

  * 경로 - 팝업 창에 표시할 문서나 사이트의 경로/주소
  * 창 이름 - 팝업 창에 이름을 지정하면 항상 지정한 창에 팝업 내용을 나타낼 수 있습니다. 만약 이름을 지정 하지 않으면 팝업 창이 계속 새로 나타납니다.
  * 창 옵션 - 팝업 창은 기본적으로 화면의 왼쪽 맨 위에 나타나는데, left 속성과 top 속성을 사용해서 위치를 조절하거나 width 속성과 height 속성을 사용해서 크기를 지정할 수 있습니다.

  * 팝업창 위치 조절하기 - open()
  * 팝업 창 닫기 - close()

  </details>

  <details><summary>📖 screen 객체 </summary>

  <table>
    <th>프로퍼티</th><th>기능</th>
    <tr>
      <td>availHeight</td><td>UI영역을 제외한 내용 표시 영역의 높이</td>
    </tr>
    <tr>
      <td>availWidth</td><td>UI 영역을 제외한 내용 표시 영역의 너비</td>
    </tr>
    <tr>
      <td>colorDepth</td><td>화면에서 픽셀을 렌더링할 때 사용하는 색상 수</td>
    </tr>
    <tr>
      <td>height</td><td>UI 영역을 포함한 화면의 높이</td>
    </tr>
    <tr>
      <td>orientation</td><td>화면의 현재 방향</td>
    </tr>
    <tr>
      <td>pixelDepth</td><td>화면에서 픽셀을 렌더링 할 때 사용하는 비트의 수</td>
    </tr>
    <tr>
      <td>width</td><td>UI 영역을 포함한 화면의 너비</td>
    </tr>
  </table>

  </details>

  <details><summary>📖 history 객체 </summary>

  </details>

  <details><summary>📖 location 객체 </summary>

  </details>

  <details><summary>📖 웹 사이트에서 뒤로 이동 금지 하기 </summary>

  </details>

  <details><summary>📖 자바스크립트 객체의 인스턴스 만들기 </summary>

  </details>

  <details><summary>📖 현재 날짜를 기준으로 인스턴스 만들기 </summary>

  </details>

  <details><summary>📖 특정 날짜를 기준으로 인스턴스 만들기 </summary>

  </details>

  <details><summary>📖 자바스크립트의 날짜와 시간 입력 방식 </summary>

  </details>

  <details><summary>📖 Date 객체의 메서드 </summary>

  </details>

  <details><summary>📖 Math 객체의 프로퍼티와 메서드 </summary>

  </details>

  <details><summary>📖 소수점 이하 처리하기 </summary>

  </details>

  <details><summary>📖 무작위 수 추출하기 </summary>

  </details>

</details>

# 6주차

## 📖 chapter 03

* 연산자(산술 연산자 & 연결 연산자)
* 조건문(if)
* 반복문

<details><summary>📖 산술 연산자 </summary>

* 수학적인 계산을 위해 사용하는 연산자
* +, -, *, /, %, ++, --
</details>

<details><summary>📖 할당 연산자 </summary>

* 연산의 오른쪽의 실행 결과를 연산자의 왼쪽에 할당하는 연산자
* =, +=, -=, *=, /=, %=
</details>

<details><summary>📖 비교 연산자 </summary>

* 2개의 값을 비교해서 참이나 거짓으로 결괏값을 반환하는 연산자
* ==, ===, !=, !==, <, <=, >, >=
</details>

<details><summary>📖 논리 연산자 </summary>

* 참과 거짓을 피연산자로 하는 연산자
* !, &&, ||
</details>

<details><summary>📖 IF문 </summary>

* if 다음에 소괄호를 사용하여 조건을 표기, 그리고 조건을 체크한 후 결과값이 true이면 if문에 있는 명령들을, false이면 if문에 있는 명령은 건너뛰고 그 다음 명령을 실행합니다.

* 조건을 체크한 후 true일 때 처리할 명령과 false일 때 처리할 명령이 따로 있다면 if문과 else문을 사용합니다.
</details>

<details><summary>📖 조건 연산자 </summary>

* 조건이 복잡하지 않고 true와 false가 명확할 경우 if문을 사용하지 않고 조건 연산만으로 조건을 체크할 수도 있습니다.

* (조건) ? true일 때 실행할 명령 : false일 때 실행할 명령

</details>

<details><summary>📖 switch 문 </summary>

* 체크해야 할 조건값이 많을 경우에는 여러 개의 if...else 문을 사용하는 것 보다 switch문이 더 편리합니다. switch문 안에 있는 case 문에는 각 값에 따라 실행할 명령을 따로 구분 하면 됩니다.

</details>

<details><summary>📖 2개 이상 조건 체크 </summary>

* OR 연산자 : 연산자 기호는 ||를 사용하고, 2개의 피연산자 중 하나라도 true가 있으면 결과값은 true가 됩니다.
* AND 연산자 : 연산자 기호는 &&를 사용하고, 2개의 피연산자 중 false가 하나라도 있으면 결과값은 false가 됩니다.
* NOT 연산자 : 연산자 기호는 !를 사용하고, 피연산자의 값과 정반대의 값을 갖습니다.

</details>

<details><summary>📖 for 문 </summary>

* for ( 초깃값; 조건; 증가식) { ... }
* 초깃값: 몇 번 반복할지 지정하기 위해 카운터 변수를 사용하는데, 이 항목에서 카운터 변수를 선언하고 초기화합니다. 초깃값은 0이나 1부터 시작합니다.
* 조건 : 문장을 반복하기 위해 체크할 조건 부분입니다. 이 조건을 만족해야 for문 안에 있는 명령을 반복할 수 있습니다.
* 증가식 : 문장을 실행한 후 카운터 변수를 증가시키는 부분입니다. 보통 카운터 값을 하나 더 증가시키는 용도로 사용합니다.

</details>

<details><summary>📖 break, continue문 </summary>

* 반복문은 지정한 횟수 만큼 명령을 반복하지만, 조건에 따라 반복문을 중간에 끝낼 수 있습니다. 이때 break 문과 continue문을 사용합니다.
* 종료 조건이 되기 전에 반복문을 빠져나와야 할 경우도 있는데, 이때 break문을 사용합니다.
* continue문은 조건에 해당되는 값을 만났을 때 실행하던 반복문장을 건너뛰고 반복문의 맨 앞으로 되돌아가 다음 반복 과정으로 넘어가도록 합니다.

</details>

<details><summary>📖 함수 선언과 호출 </summary>

<div class="colorscripter-code" style="color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important;overflow:auto"><table class="colorscripter-code-table" style="margin:0;padding:0;border:none;background-color:#fafafa;border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px;border-right:2px solid #e5e5e5"><div style="margin:0;padding:0;word-break:normal;text-align:right;color:#666;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="line-height:130%">1</div><div style="line-height:130%">2</div><div style="line-height:130%">3</div><div style="line-height:130%">4</div><div style="line-height:130%">5</div><div style="line-height:130%">6</div><div style="line-height:130%">7</div><div style="line-height:130%">8</div></div></td><td style="padding:6px 0;text-align:left"><div style="margin:0;padding:0;color:#010101;font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important;line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#a71d5d">function</span>&nbsp;calcSum(){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#a71d5d">let</span>&nbsp;sum&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">0</span>;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#a71d5d">for</span>(<span style="color:#a71d5d">let</span>&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">1</span>;&nbsp;i&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">&lt;</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;<span style="color:#0099cc">10</span>;&nbsp;i<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">+</span>){</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#ff3399"></span><span style="color:#a71d5d">+</span><span style="color:#ff3399"></span><span style="color:#a71d5d">=</span>&nbsp;i;</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;}</div><div style="padding:0 6px; white-space:pre; line-height:130%">&nbsp;&nbsp;<span style="color:#066de2">console</span>.log(`1부터&nbsp;10까지&nbsp;더하면&nbsp;${sum}입니다.`);</div><div style="padding:0 6px; white-space:pre; line-height:130%">}</div><div style="padding:0 6px; white-space:pre; line-height:130%">calcSum();</div></div><div style="text-align:right;margin-top:-13px;margin-right:5px;font-size:9px;font-style:italic"><a href="http://colorscripter.com/info#e" target="_blank" style="color:#e5e5e5text-decoration:none">Colored by Color Scripter</a></div></td><td style="vertical-align:bottom;padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none;color:white"><span style="font-size:9px;word-break:normal;background-color:#e5e5e5;color:white;border-radius:10px;padding:1px">cs</span></a></td></tr></table></div>

</details>

<details><summary>📖 매개변수와 인수, return문 </summary>

* 함수를 선언할 때 외부에서 값을 받는 변수를 매개변수 라고 합니다.
* 함수 선언이 끝났으면 이제 함수를 실행하라고 호출해야 합니다. 이렇게 매개변수가 있는 함수를 호출할 때 실제로 값을 넣어 넘겨주는 것을 인수 라고 합니다.
* 함수의 실행 결과를 함수를 실행한 시점으로 넘겨주어야 하는데, 이것을 '함수값을 반환한다.(return)' 라고 합니다.

</details>

<details><summary>📖 스코프 </summary>

* 스코프 란, 선언한 변수의 적용 범위를 가리킵니다.
* 변수를 특정 영역에서만 사용할 수 있을 때 '지역 스코프를 가지고 있다.' 라고 말하고, 이런 변수를 지역변수 라고 합니다.
* 전역 스코프는 프로그램의 시작 부분에서 변수를 선언하면 프로그램 전체에서 사용할 수 있는 스코프 입니다.

</details>

<details><summary>📖 익명 함수 </summary>

* 함수 이름이 없는 함수

</details>

<details><summary>📖 즉시 실행 함수 </summary>

* 필요할 때마다 여러 번 실행할 수 있어서 매우 편리함
* 한 번만 실행하는 함수일 경우 함수를 정의하면서 동시에 실행할 수도 있는데, 이런 함수를 즉시 실행 함수 라고 합니다.

</details>

<details><summary>📖 화살표 함수 </summary>

* 표현식을 사용해 함수를 정의할 경우에만 사용 가능
* (매개변수) => {함수 내용}

</details>

<details><summary>📖 콜백 함수 </summary>

* 다른 함수의 인수로 사용하는 함수를 가리키는 함수

</details>

<details><summary>📖 전개 구문 </summary>

* 값을 펼쳐 주는 구문
* console.log(...fruits)

</details>

<details><summary>📖 나머지 매개변수 </summary>

* 전개 구문을 사용해서 매개변수를 만드는데, 이것을 나머지 매개변수 라고 합니다.

</details>

<details><summary>📖 타이머 함수 </summary>

* 특정 시간이 되었을 때 함수를 실행하거나 특정 시간 동안 함수를 반복하기 위해 시간을 재는 함수
* setInterval() 함수는 일정한 시간마다 함수를 반복해서 실행하는 함수
* clearInterval() 함수는 setInterval() 함수로 시작한 타이머를 종료하는 함수
* setTimeout() 함수는 지정한 시간이 지난 후에 콜백 함수를 실행합니다.

</details>

<details><summary>📖 DOM </summary>

* 자바스크립트 같은 프로그래밍 언어로 웹 문서에 접근하고 제어할 수 있도록 웹 문서를 체계적으로 정리하는 방법

</details>

<details><summary>📖 querySelector 함수 </summary>

</details>

<details><summary>📖 querySelectorAll 함수 </summary>

</details>

<details><summary>📖 웹 요소의 내용을 가져오고 수정하기 </summary>

* innerText
* innerHtml
* textContent

</details>

<details><summary>📖 CSS 속성에 접근하고 수정하기 </summary>

</details>

<details><summary>📖 classList 프로퍼티 살펴보기 </summary>

* innerText
* innerHtml
* textContent

</details>

<details><summary>📖 클래스 스타일을 추가하고 삭제하기 </summary>

* add() 함수
* contains() 함수
* 클래스 스타일 토글하기

</details>

<details><summary>📖 폼 요소에 접근하고 값을 가져오는 방법 </summary>

* id나 class 속성값을 사용하여 폼 요소에 접근
* 텍스트 필드에 입력한 값 가져오기
* name 속성값을 사용해 폼 요소에 접근하기
* 폼 배열을 사용해 폼 요소에 접근하기

</details>

<details><summary>📖 선택 목록과 항목에 접근하기 </summary>

* 선택 목록에 접근하기
* 알림 창에 선택한 항목 표시하기

</details>

<details><summary>📖 라디오 버튼과 체크 박스에 접근하기 </summary>

* 라디오 버튼에 접근하기
* 체크 박스에 접근하기
* checked 속성을 사용해 선택한 항목에 접근하기

</details>

<details><summary>📖 이벤트란? </summary>

* 웹 브라우저나 사용자가 실행하는 어떤 동작을 말합니다.
* 예를 들어 웹 문서에서 키보드의 키를 누르는 것도 이벤트이고, 웹 브라우저 창에 웹 페이지를 불러오는 것도 이벤트 입니다.
* 이벤트는 웹 페이지를 읽어 오거나 링크를 클릭하는 것처럼 웹 문서 영역에서 이루어지는 동작만을 말합니다.

</details>

<details><summary>📖 문서 로딩 이벤트 </summary>

* 문서 로딩 이벤트는 서버에서 웹 문서를 가져오거나 위아래로 스크롤하는 등 웹문서를 웹 브라우저 창에 보여주는 것과 관련된 이벤트 입니다.

<table>
  <th>이벤트</th><th>이벤트가 발생하는 순간</th>
  <tr>
    <td>abort</td><td>웹 문서가 완전히 로딩되기 이전에 불러오기를 멈추었을 때</td>
  </tr>
  <tr>
    <td>error</td><td>문서가 정확히 로딩되지 않았을 때</td>
  </tr>
  <tr>
    <td>load</td><td>문서 로딩이 끝났을 때</td>
  </tr>
  <tr>
    <td>resize</td><td>문서 화면의 크기가 바뀌었을 때</td>
  </tr>
  <tr>
    <td>scroll</td><td>문서 화면이 스크롤 되었을 때</td>
  </tr>
  <tr>
    <td>unload</td><td>문서를 벗어날 때</td>
  </tr>
</table>

</details>

<details><summary>📖 마우스 이벤트 </summary>

* 마우스 이벤트는 마우스에서 버튼이나 휠 버튼을 조작할 때 발생하는 이벤트입니다.

<table>
  <th>이벤트</th><th>이벤트가 발생하는 순간</th>
  <tr>
    <td>click</td><td>사용자가 HTML 요소를 클릭했을 때</td>
  </tr>
  <tr>
    <td>dbclick</td><td>사용자가 HTML 요소를 더블 클릭했을 때</td>
  </tr>
  <tr>
    <td>mousedown</td><td>사용자가 요소에서 마우스 버튼을 눌렀을 때</td>
  </tr>
  <tr>
    <td>mousemove</td><td>사용자가 요소에서 마우스 포인터를 움직일 때</td>
  </tr>
  <tr>
    <td>mouseover</td><td>마우스 포인터를 요소 위로 옮길 때</td>
  </tr>
  <tr>
    <td>mouseout</td><td>마우스 포인터가 요소를 벗어날 때</td>
  </tr>
  <tr>
    <td>mouseup</td><td>요소 위에 올려놓은 마우스 버튼에서 손을 뗄 때</td>
  </tr>
</table>

</details>

<details><summary>📖 키보드 이벤트 </summary>

* 키보드 이벤트는 키보드에서 특정 키를 조작할 때 발생하는 이벤트 입니다.

<table>
  <th>이벤트</th><th>이벤트가 발생하는 순간</th>
  <tr>
    <td>keydown</td><td>키를 누르는 동안</td>
  </tr>
  <tr>
    <td>keypress</td><td>키를 눌렀을 때</td>
  </tr>
  <tr>
    <td>keyup</td><td>키에서 손을 뗄 때</td>
  </tr>
</table>

</details>

<details><summary>📖 키보드 이벤트 </summary>

* 키보드 이벤트는 키보드에서 특정 키를 조작할 때 발생하는 이벤트 입니다.

<table>
  <th>이벤트</th><th>이벤트가 발생하는 순간</th>
  <tr>
    <td>keydown</td><td>키를 누르는 동안</td>
  </tr>
  <tr>
    <td>keypress</td><td>키를 눌렀을 때</td>
  </tr>
  <tr>
    <td>keyup</td><td>키에서 손을 뗄 때</td>
  </tr>
</table>

</details>

<details><summary>📖 HTML 태그에 함수 연결하기 </summary>

* HTML 태그에 이벤트 처리기를 연결하기 위한 속성을 추가하는데, 속성 이름은 'on이벤트명' 으로 표현하고 그 뒤에 함수를 연결하는 것 입니다.

</details>

<details><summary>📖 웹 요소에 함수 연결하기 </summary>

* 스크립트 소스를 변경해도 HTML 마크업에는 영향을 주지 않게 하려면 이벤트 처리기도 스크립트 소스에서 처리하는 것이 좋습니다.

</details>

<details><summary>📖 이벤트 리스너로 이벤트 처리하기 </summary>

* 이벤트 리스너는 모든 DOM요소에서도 사용할 수 있고, 모든 함수에서도 실행 할 수 있습니다.

</details>

<details><summary>📖 event 객체의 프로퍼티와 메서드 </summary>

* 웹 문서에 이벤트가 발생하면 자동으로 이벤트와 관련된 객체가 만들어 집니다.

<table>
  <th>프로퍼티</th><th>기능</th>
  <tr>
    <td>altKey</td><td>이벤트가 발생했을 때 [Alt]를 누르고 있었는지의 여부를 확인하고 Boolean값을 반환합니다.</td>
  </tr>
  <tr>
    <td>button</td><td>마우스 키값을 반환합니다.</td>
  </tr>
  <tr>
    <td>charCode</td><td>keypress 이벤트가 발생했을 때 어떤 키가 눌렸는지 유니코드 값으로 반환합니다.</td>
  </tr>
  <tr>
    <td>clientX</td><td>이벤트가 발생한 가로 위치를 반환합니다.</td>
  </tr>
  <tr>
    <td>clientY</td><td>이벤트가 발생한 세로 위치를 반환합니다.</td>
  </tr>
  <tr>
    <td>ctrlKey</td><td>이벤트가 발생했을 때 [Ctrl]를 누르고 있었는지의 여부를 확인하고 Boolean값을 반환합니다.</td>
  </tr>
  <tr>
    <td>pageX</td><td>현재 문서를 기준으로 이벤트가 발생한 가로 위치를 반환합니다.</td>
  </tr>
  <tr>
    <td>pageY</td><td>현재 문서를 기준으로 이벤트가 발생한 세로 위치를 반환합니다.</td>
  </tr>
  <tr>
    <td>screenX</td><td>현재 화면을 기준으로 이벤트가 발생한 가로 위치를 반환합니다.</td>
  </tr>
  <tr>
    <td>screenY</td><td>현재 화면을 기준으로 이벤트가 발생한 세로 위치를 반환합니다.</td>
  </tr>
  <tr>
    <td>shiftKey</td><td>이벤트가 발생했을 때 [Shift]를 누르고 있었는지의 여부를 확인하고 Boolean값을 반환합니다.</td>
  </tr>
  <tr>
    <td>target</td><td>이벤트가 발생한 대상을 반환합니다.</td>
  </tr>
  <tr>
    <td>tineStamp</td><td>이벤트가 발생한 시간을 밀리초 단위로 반환합니다.</td>
  </tr>
  <tr>
    <td>type</td><td>발생한 이벤트 이름을 반환합니다.</td>
  </tr>
  <tr>
    <td>which</td><td>키보드와 관련된 이벤트가 발생했을 때 키의 유니코드 값을 반환합니다.</td>
  </tr>
</table>

<table>
  <th>메서드</th><th>기능</th>
  <tr>
    <td>preventDefault</td><td>(취소 할 수 있을 경우) 기본 동작을 취소합니다.</td>
  </tr>
</table>
</details>

<details><summary>📖 이벤트 버블링 </summary>

* 특정 요소에서 이벤트가 발생했을 때 그 이벤트가 해당 요소뿐만 아니라 그 요소의 부모요소, 부모요소의 부모요소에도 똑같이 발생한 것으로 간주하는 것 입니다.

</details>

<details><summary>📖 이벤트 캡처링 </summary>

* 웹 요소에서 이벤트가 발생하면 일단 최상위 요소에서 시작해서 이벤트가 발생한 요소까지 차례대로 이벤트가 전파되는 방식 입니다.

</details>

# 5주차

## 📖 클래스 스타일 추가하고 삭제하기

* 클래스 스타일을 추가할 때는 add( ) 함수를
* 삭제할 때는 remove( ) 함수를 사용합니다.

## 📖 클래스 스타일 토글

* contains( ), add( ), remove( ) 함수를 toggle( ) 함수로 간단히 바꿀 수 있습니다.

## 📖 폼 요소에 접근하고 값을 가져오는 방법

* id나 class 속성값을 사용하여 폼 요소에 접근
* 텍스트 필드에 입력한 값 가져오기
* name 속성값을 사용해 폼 요소에 접근하기
* 폼 배열을 사용해 폼 요소에 접근하기

## 📖 선택 목록과 항목에 접근하기

* 선택 목록에 접근하기
* 알림 창에 선택한 항목 표시하기

## 📖 라디오 버튼과 체크 박스에 접근하기

* 라디오 버튼에 접근하기
* 체크 박스에 접근하기
* checked 속성을 사용해 선택한 항목에 접근하기

## 📖 이벤트란?

* 웹 브라우저나 사용자가 실행하는 어떤 동작을 말합니다.
* 예를 들어 웹 문서에서 키보드의 키를 누르는 것도 이벤트이고, 웹 브라우저 창에 웹 페이지를 불러오는 것도 이벤트 입니다.
* 이벤트는 웹 페이지를 읽어 오거나 링크를 클릭하는 것처럼 웹 문서 영역에서 이루어지는 동작만을 말합니다.

## 📖 문서 로딩 이벤트

* 문서 로딩 이벤트는 서버에서 웹 문서를 가져오거나 위아래로 스크롤하는 등 웹문서를 웹 브라우저 창에 보여주는 것과 관련된 이벤트 입니다.

<table>
  <th>이벤트</th><th>이벤트가 발생하는 순간</th>
  <tr>
    <td>abort</td><td>웹 문서가 완전히 로딩되기 이전에 불러오기를 멈추었을 때</td>
  </tr>
  <tr>
    <td>error</td><td>문서가 정확히 로딩되지 않았을 때</td>
  </tr>
  <tr>
    <td>load</td><td>문서 로딩이 끝났을 때</td>
  </tr>
  <tr>
    <td>resize</td><td>문서 화면의 크기가 바뀌었을 때</td>
  </tr>
  <tr>
    <td>scroll</td><td>문서 화면이 스크롤 되었을 때</td>
  </tr>
  <tr>
    <td>unload</td><td>문서를 벗어날 때</td>
  </tr>
</table>

## 📖 마우스 이벤트

* 마우스 이벤트는 마우스에서 버튼이나 휠 버튼을 조작할 때 발생하는 이벤트입니다.

<table>
  <th>이벤트</th><th>이벤트가 발생하는 순간</th>
  <tr>
    <td>click</td><td>사용자가 HTML 요소를 클릭했을 때</td>
  </tr>
  <tr>
    <td>dbclick</td><td>사용자가 HTML 요소를 더블 클릭했을 때</td>
  </tr>
  <tr>
    <td>mousedown</td><td>사용자가 요소에서 마우스 버튼을 눌렀을 때</td>
  </tr>
  <tr>
    <td>mousemove</td><td>사용자가 요소에서 마우스 포인터를 움직일 때</td>
  </tr>
  <tr>
    <td>mouseover</td><td>마우스 포인터를 요소 위로 옮길 때</td>
  </tr>
  <tr>
    <td>mouseout</td><td>마우스 포인터가 요소를 벗어날 때</td>
  </tr>
  <tr>
    <td>mouseup</td><td>요소 위에 올려놓은 마우스 버튼에서 손을 뗄 때</td>
  </tr>
</table>

## 📖 키보드 이벤트

* 키보드 이벤트는 키보드에서 특정 키를 조작할 때 발생하는 이벤트 입니다.

<table>
  <th>이벤트</th><th>이벤트가 발생하는 순간</th>
  <tr>
    <td>keydown</td><td>키를 누르는 동안</td>
  </tr>
  <tr>
    <td>keypress</td><td>키를 눌렀을 때</td>
  </tr>
  <tr>
    <td>keyup</td><td>키에서 손을 뗄 때</td>
  </tr>
</table>

## 📖 폼 이벤트

* 로그인이나 검색, 게시판, 설문 조사 처럼 사용자가 데이터를 입력하는 모든 요소를 가리킵니다.

<table>
  <th>이벤트</th><th>이벤트가 발생하는 순간</th>
  <tr>
    <td>blur</td><td>폼 요소에 포커스를 잃었을 때</td>
  </tr>
  <tr>
    <td>change</td><td>목록이나 체크 상태 등이 변경되었을 때</td>
  </tr>
  <tr>
    <td>focus</td><td>폼 요소에서 포커스를 놓았을 때</td>
  </tr>
  <tr>
    <td>reset</td><td>폼이 리셋되었을 때</td>
  </tr>
  <tr>
    <td>submit</td><td>[submit] 버튼을 클릭했을 때</td>
  </tr>
</table>

## 📖 HTML 태그에 함수 연결하기

* HTML 태그에 이벤트 처리기를 연결하기 위한 속성을 추가하는데, 속성 이름은 'on이벤트명' 으로 표현하고 그 뒤에 함수를 연결하는 것 입니다.

## 📖 웹 요소에 함수 연결하기

* 스크립트 소스를 변경해도 HTML 마크업에는 영향을 주지 않게 하려면 이벤트 처리기도 스크립트 소스에서 처리하는 것이 좋습니다.

## 📖 이벤트 리스너로 이벤트 처리하기

* 이벤트 리스너는 모든 DOM요소에서도 사용할 수 있고, 모든 함수에서도 실행 할 수 있습니다.

# 4주차

## 📖 함수

* 함수를 선언하고 호출하기
* 매개변수와 인수, return문
1. 함수 선언시 외부에서 값을 받는 변수를 '매개변수' 라고 합니다.
2. 함수 선언이 끝났다면 이제 함수를 실행하라고 호출해야 합니다.
3. 함수의 실행 결과를 함수를 실행한 시점으로 넘겨주어야 하는데, 이를 '함숫값을 반환한다.' 라고 합니다.
* 기본 매개변수

## 📖 디버깅기능

## 📖 스코프
* 지역 스코프
* 전역 스코프
* 블록 스코프

## 📖 자바스크립트 변수 사용
1. var 변수보다 let, const 변수를 사용
2. 전역 변수는 최소한으로 사용
3. 객체 선언은 const를 사용

## 📖 함수 표현식
* 익명 함수
* 즉시 실행 함수
* 화살표 함수
1. 매개변수가 없을 때는 매개변수가 들어가는 소괄호 부분을 비워 둡니다.
2. 매개변수가 1개 일경우 매개변수의 소괄호를 생략해서 사용할 수 있습니다.
3. 매개변수가 2개 이상이면 (매개변수) => { ... }처럼 사용합니다.
* 콜백 함수

## 📖 자바스크립트 함수는 1급 시민
* 다음과 같은 조건을 만족하는 것을 말합니다.
1. 변수에 할당할 수 있어야 합니다.
2. 다른 함수의 인자로 사용할 수 있어야 합니다.
3. 다른 함수에서 반환값으로 반환할 수 있어야 합니다.

* 변수에 함수 할당하기
* 함수를 다른 함수로 전달하기
* 함수에서 다른 함수 반환하기

## 📖 전개 구문
* 값을 펼쳐주는 구문
* 전개 구문은 함수를 선언할 때 사용할 수도 있다.

## 📖 타이머 함수
* 일정 시간마다 반복하기 - setInterval()
* 반복 실행 멈추기 - clearInterval()
* 특정 시간 이후에 실행하기 - setTimeout()

## 📖 DOM
* 자바스크립트 같은 프로그래밍 언어로 웹 문서에 접근하고 제어할 수 있도록 웹문서를 체계적으로 정리하는 방법

## 📖 DOM 트리
* DOM을 활용하여 웹 문서의 요소를 부모와 자식으로 구분해서 표시하다 보면 마치 나무처럼 모양이 나타나서 이것을 DOM 트리 라고 부릅니다.

## 📖 querySelector 함수

## 📖 querySelectorAll 함수

## 📖 웹 요소의 내용을 가져오고 수정하기
* innerText
* innerHtml
* textContent

## 📖 CSS 속성에 접근하고 수정하기

## 📖 classList 프로퍼티 살펴보기

## 📖 클래스 스타일을 추가하고 삭제하기
* add() 함수
* contains() 함수
* 클래스 스타일 토글하기

# 3주차

## 📖 자료형

* typeof( ) 함수
* 숫자형
* 문자열
* 특수기호 표시하기
* 템플릿 리터럴
* 논리형
* truthy, falsy
* null, undefined

## 📖 객체

* 객체 정의하기
* 객체의 값에 접근하기
* 배열

## 📖 심벌

* 심벌 만들기
* 심벌에 설명 추가하기

## 📖 JavaScript 자료형의 특징

* 강력한 자료형 체크
* 느슨한 자료형 체크
* 자동 형 변환

## 📖 직접 숫자형으로 변환하기

* Number( ) 함수
* parseInt( ) 함수
* parseFloat( ) 함수

## 📖 조건문

* if문
* if...else 문

## 📖 조건 연산자

## 📖 반복문

* for 문
* forEach 문
* for...in 문
* for...of 문
* while 문과 do...while 문
* break 문과 continue 문

## 📖 함수

* 함수 선언 하기와 호출하기

## 📖 매개변수와 인수

* 매개변수
* 인수
* return 문
* 기본 매개변수

# 2주차

* 인라인 스크립트
* 내부 스크립트
* 인라인 스크립트와 내부 스크립트 소스의 단점

## 📖 팝업창 표시하기

* alert( ) 함수
* confirm( ) 함수
* prompt( ) 함수

* console.log( )
* document.write( )

## 📖 변수

* 변수 선언하기
* 변수에 값 할당하기
* var와 변수 호이스팅
* 재선언, 재할당


# 1주차