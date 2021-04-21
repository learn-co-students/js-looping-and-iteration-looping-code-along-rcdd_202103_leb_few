// Code your solutions in this file

//let array=[];
const names=[ 'Lisa', 'Kaitlin', 'Jan' ];
const event="surprise";let array=[];
function writeCards(names,event) {

  for (let i = 0; i < names.length; i++) {

array[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;

}
return array;
  }

writeCards(names,event);


writeCards(names,event);
function countDown(n){
  while (n>=0) {
    console.log(n);
    n--;
 }
 }





countDown(10);
