// Code your solutions in this file
/*const names=['Liza','Kaitlin','Jan'];
const event="surprise";*/
const names=['Liza','Kaitlin','Jan'];
  function writeCards(names, event) {
    let newArray=[];
    event="surprise";
  for (let i=0; i<names.length; i++) {
  newArray[i] = `Thank you, `+names[i]+`, for the wonderful `+event+` gift!`;
  }
  return newArray;
}

//console.log (writeCards(names, "surprise"));



let number = 10;
function countDown(number) {
  while (number>=0) {
    console.log(number--);}
}
//console.log(countDown);
