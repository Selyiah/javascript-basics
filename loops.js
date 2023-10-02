//using the for loop
for (let counter = 1; counter <= 10; counter++){
   console.log(counter)
}
for (let timer = 5; timer <=15; timer++){
  console.log(timer)
}


let fruit = ["apple", "cherry", "plum", "mango", "pineapple"]

for (let index = 0; index < fruit.length; index++){
  console.log(fruit[index])
}

fruit.pop()
console.log(fruit)


// using the while loop - keeps the run going as long as the condition is true 
let countdown = 3

while (countdown > 0){
  console.log(countdown)
  countdown-- // decrement means -- // increment means ++
}

console.log("🚀")


let countup = 1

while (countup < 11){
  console.log(countup)
  countup++
}

console.log("🏆")
