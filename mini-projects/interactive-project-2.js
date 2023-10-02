// prompts 
const greeting ="Welcome to friends world"
const emoji= "👬 "

//concatenation
const finalgreeting = " " + greeting + " " + emoji 
console.log(finalgreeting)

//Please tell me your name
const name = prompt ("enter your name")
console.log (`My name is ${name}.`)

//how many friends you got? 
const yournumber = prompt ("How many friends do you have?", 3)
const rate = 3 
const result = yournumber * rate 

//interpolation
console.log(`I have ${result} friends`)
//at first i was confused at the alert because I embedded concactenation inside the brackets but after i removed it, it worked fine!
alert ("Hey! You are popular if you have more than 5 friends")
