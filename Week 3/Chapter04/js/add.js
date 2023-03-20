function calcSum(){
  let sum = 0;
  for(let i = 1; i <= 10; i++){
    sum += i;
  }
  console.log(`1부터 10까지 더하면 ${sum}입니다.`);
}

function calcSum2(n){
    let num = 0;
    for(let k = 1; k <= n; k++){
        num += k;
    }
    console.log(`1부터 ${n}까지 더하면 ${num}입니다.`);
}
calcSum();
calcSum2(10);