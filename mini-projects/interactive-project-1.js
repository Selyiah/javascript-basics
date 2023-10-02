//study partner session
alert("Hey study partner!");

//before the study session commences
const response = prompt("would you prefer a coffee or water?");

//characterising capital vs lowercase words to both be options under the same meaning
if (response === "coffee" || response === "Coffee") {
  console.log("☕");
}

//water is option 2 if chosen
else if (response === "water" || response === "Water") {
  console.log("💧");
}

//if nothing or anything else is chosen this emoji will appear
else {
  console.log("🫠");
}

//function syntax, defining parameters
const response2 = prompt(
  "If we work 2 hours on history and 2 hours on Maths, how many hours are we studying total?"
);
//numbers can be changed
function getSum(n2, n2) {
  return n2 + n2;
}
console.log(getSum(2, 2));

//let
const response3 = prompt(
  "studying helps us to best achieve the highest exam score 10, true or false?"
);

let studying = 10;
const score = 10;
//let's check if studying helps get a high score
console.log(studying === score);

const response4 = prompt(
  "do we have enough money to a buy a book with £10 if the book costs £8, true or false?"
);

let money = 10;
const travel = 2;
const book = 8;

console.log(money >= travel + book);

const response5 = prompt(
  "if the number 7 faced a mirror, does the number remain the same, true or false?"
);
//numbers and strings below
console.log(7 == "7");

const response6 = prompt("7x4 = 28, true or false?");
//different comparison operator
console.log(7 * 4 === 28);

//switch case statement
const study = "history";

switch (study) {
  case "maths":
    console.log("chosen topic to study is maths");
    break;
  case "science":
    console.log("chosen topic to study is science");
    break;
  case "history":
    console.log("chosen topic to study is history");
    break;
  default:
    console.log("unknown topic to study chosen");
    break;
}
