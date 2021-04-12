// Code your solutions in this file
function writeCards(names, gName){
  let msg = [];
  for(let i = 0; i < names.length; i++) {
    msg.push(`Thank you, ${names[i]}, for the wonderful ${gName} gift!`)
  }
  return msg;
}
writeCards(['Mohamad','Salim','Abdualla'], 'car');


function countDown(num) {

  for(let i = num; i > -1; i--){
    console.log(i);
  }

}
countDown(4);
