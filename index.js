//No.1



function writeCards(names , birthday) {
  const heyHey = []
  for (let i = 0; i < names.length; i++) {
heyHey.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
}

return heyHey;
}
let names = ["Ada", "Brendan", "Ali"];
writeCards(names, 'birthday');




//No.2
let number = 15;

function countDown(number) {
while (number >= 0) {
console.log(number--);
}

return countDown;
}

countDown(number);
