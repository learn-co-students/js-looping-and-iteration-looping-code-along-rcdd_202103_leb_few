// Code your solutions in this file
// let a = ['Ziad','Robert','Jean']
let message =[];
function  writeCards(names,event){
 for(let i = 0; i<names.length; i++){
   message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
 } 
 return message
}
 writeCards()

let n = 10;
//let i = 0;
function countDown(n){
  while(n>=0){
    console.log(n);
    n--;
  }
}
countDown(n)
