function countDown(a){
  for(let i =a;i>=0;i--){
    console.log(i);
  }
}
let messages = [];
let wtf = ['adnan','samir'];
let e = 'birthday';
let names = [];
function writeCards(names,eventName){
  for (let i = 0; i < names.length; i++) {
messages[i]=(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);

  }
  return messages;
}
countDown(10);
writeCards(wtf,e);
