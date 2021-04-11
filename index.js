function writeCards(myArray, eventName){
  let result = [];
  for(let i=0; i<myArray.length;i++){
    result[i]= `Thank you, ${myArray[i]}, for the wonderful ${eventName} gift!`;
  }
  return result;
}
// writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(n){
  while(n>=0){
    console.log(n);
    n--;
  }
}
