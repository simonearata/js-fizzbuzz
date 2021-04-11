var numeri = []

for (var i = 0; i <= 100; i++){
  numeri = i
  
  if(numeri%3 && numeri%5){
    console.log(numeri);
  }else if(numeri%3 == 0){
    console.log("Fizz")
  }else if(numeri%5 == 0){
    console.log("Buzz")
  }
}

