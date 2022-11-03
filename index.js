let a = 1;
let b = 100;
let random = a + (b - a) * Math.random();
random = parseInt(random)
// console.log(random)
let score = 1;
let value;
while (random != value) {
  value = parseInt(prompt("Guess The Number between 1 to 100:"));
  let scour1 = 100 - score;
  if (random == value) {
    alert("You Have guessed the right number")
    alert(`Your Score Out of 100 is ${scour1}`);
  }
  else if (value < random) {
    alert("Guessed Number is Smaller the the Random number");
  }
  else if (value > random) {
    alert("Guessed Number is Bigger the the Random number");
  }
  score++;
}