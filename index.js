// Code your solutions in this file
function writeCards(strings, event){
  let result = [];
  for(let i=0; i < strings.length; i++){
    result.push(`Thank you, ${strings[i]}, for the wonderful ` + event + " gift!");
  }
  return result;
}

function countDown(number){
  while(number >= 0){
    console.log(number--);
  }
}
