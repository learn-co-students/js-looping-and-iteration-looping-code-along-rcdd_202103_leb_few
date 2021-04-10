// Code your solutions in this file
//
// function writeCards() {
//   let a = (["Ada", "Brendan", "Ali"], "birthday");
//   for ( let i = 0 ; i < a[0].length ; i++) {
//     console.log(`thank u ${a[i]} for the wonderful ${a[1]}  gift!`);
//   };return a;
// };
function writeCards(listFriends, celebratedDay){
    let gratitudeCard = [];
    for (let i=0; i<listFriends.length;i++){
      gratitudeCard.push(`Thank you, ${listFriends[i]}, for the wonderful ${celebratedDay} gift!`);
    }

    return gratitudeCard;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");



 function countDown(){

  let i = 10;
    while (i >=  0 ) {
      console.log(i);
      i--;
}
 }
