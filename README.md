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