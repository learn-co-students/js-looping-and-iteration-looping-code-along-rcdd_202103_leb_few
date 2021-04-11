// Code your solutions in this file
function writeCards(name,event)
{
   var msg = new Array();
  for(let i=0;i<name.length;i++)
  {
   msg[i]=('Thank you,'+' ' +name[i]+','+ ' for the wonderful '  +event+  ' gift!');
 }
 return msg;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");
function countDown(nb){
  while(nb>= 0){
    console.log(nb);
    nb--
  }
}
countDown(10);
