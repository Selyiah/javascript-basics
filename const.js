// gretting message 
const greeting ="Hello everyone I am Melissa"
const emoji="♥"
      
//interpolation
const name= `${emoji} ${greeting} ${emoji}`

//concatenation
const name1 = emoji + " " + greeting + " " + emoji 
console.log(name)

const message= emoji+ " " + greeting + " "
+ emoji
console.log(3)
console.log(message)
console.log(greeting)
console.log(emoji)


// currency converter 
const gbp2egp = 38.62
const gbp = prompt("Amount in GBP?") 

const egp = gbp * gbp2egp 

console.log(egp + " EGP")

// prompt rate 
const gbp = prompt ("Enter an amount in GBP", 10)
const rate = 1.5 
const result = gbp * rate 

console.log(`That's ${result} future coins`)




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
