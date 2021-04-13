// Code your solutions in this file
function writeCards(array, name){
   let m=[];
  for (let i=0;i<array.length;i++)
  {
  m.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
  }
  return m;

}
console.log( writeCards(["Ada", "Brendan", "Ali"], "birthday"));

function countDown(){
  let i=0;
  while (i<11) {
    console.log(i);
    i++;
  }
}
