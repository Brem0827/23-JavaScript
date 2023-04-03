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

1. [1주차](#1주차)
2. [2주차](#2주차)
3. [3주차](#3주차)
4. [4주차](#4주차)
5. [5주차](#5주차)

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