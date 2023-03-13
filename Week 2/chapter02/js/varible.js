function add(a,b){
    return a + b;
}
/*
    var : 재선언, 재할당 가능
    let : 재할당만 가능
    const : 재선언, 재할당 불가능
*/
var sum = add(10,20);
console.log(sum);
var sum = 100;
console.log(sum);