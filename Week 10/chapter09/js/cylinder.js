class Cylinder {
    constructor(cylinderDiameter, cylinderHeight) {
      this.diameter = cylinderDiameter;
      this.height = cylinderHeight;
    }
    volume() {
      let radius = this.diameter / 2; // 반지름 계산하기
      return (Math.PI * radius * radius * this.height).toFixed(2); // 부피 계산해서 반환
    }
  }

const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", function(event){
    event.preventDefault();
    const diameter = document.querySelector("#cyl-diameter").value;
    const height = document.querySelector("#cyl-height").value;

    if(diameter === "" || height === ""){
        result.innerText = `지름 값과 높잇값을 입력하세요.`;
    }
    else {
        let cylinder = new Cylinder(parseInt(diameter), parseInt(height));
        result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
    }
});