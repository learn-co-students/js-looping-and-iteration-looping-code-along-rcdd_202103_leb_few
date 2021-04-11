// Code your solutions in this file
function writeCards(names,ev)
{
  let array = [];
  for(let i=0;i<names.length;i++)
  {
    array.push(`Thank you, ${names[i]}, for the wonderful ${ev} gift!`);
  }
  return array;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown(n)
{
  while(n!==0)
  {
    console.log(n);
    n--;
  }
  console.log(0);
}
