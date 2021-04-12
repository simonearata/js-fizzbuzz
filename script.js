var numeri = []

for (var i = 0; i <= 100; i++){
  numeri = i
  
  if(numeri%3 == 0 && numeri%5 == 0){
    console.log("FizzBuzz");
  }else if(numeri%3 == 0){
    console.log("Fizz")
  }else if(numeri%5 == 0){
    console.log("Buzz")
  }else{
    console.log(numeri)
  }
}

