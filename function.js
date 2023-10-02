// you can rename banner to anything you want
function banner (message) {
  console.log(message)
}
banner("hello")
banner("goodbye")

// function syntax, defining parameters 
function banner(n1,n2){
  return n1+n2
}
console.log(banner(1,2))

function getSum(number1, number2){
  //statement (what the function is doing)
  return number1 + number2;
  //option return statement
}


//prompt
const name=prompt("what is your name?")
//add a space between hello and  " to result in "Hello Melissa" rather than "HelloMelissa"
function makestart(name){
  return "Hello " +name
}
const hello = makestart(name)
console.log(hello)
