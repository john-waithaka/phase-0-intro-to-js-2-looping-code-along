// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

//test 1

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, occasion) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

//test 2 - not passing
// 1) invokes console.log once for each number, counting down from the number provided to zero

// function countdown() {
//   for (let i = 10; i >= 0; i--) {
//     console.log(i);
//   }
// }

function countdown() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}



// test 3
// 2) logs each number when counting down, starting from the number provided


//test 3 - not running
function countdown() {
  const calledWithExactly = [];
for (let i = 10; i <names.lenght; i--) {
const message = "Expected countDown ${[i]} to log ${[i]} first";
  calledWithExactly.push(message);
  }
return calledWithExactly;
}
