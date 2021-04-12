// Code your solutions in this file
function writeCards(gifts, eventName){
  let newArray = [];
  for (let i = gifts.length-1; i >= 0; i--) {
    newArray.unshift(`Thank you, ${gifts[i]}, for the wonderful ${eventName} gift!`);
  }
  return newArray;
}
// console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

function countDown(posNum){
  while (posNum >= 0) {
    console.log(posNum);
    posNum--
  }
}
