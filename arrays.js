let fruit = ["apple", "plum", "cherry", "mango"]

console.log(fruit.length)
//.length means the console would output the amount, in this case it would be 4
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])


//push & pop arrays 
let fruit = ["apple", "cherry", "mango", "plum"]
console.log(fruit)

//add avocado to the end of the list 
fruit.push("avocado")
console.log(fruit)

//avocado is not a fruit 
fruit.pop()
console.log(fruit)

//yes it is 
fruit.push("avocado")
console.log(fruit)

//push and pop with animals 
let animal = ["tiger", "lion", "polar bear"]

animal.push("jaguar", "monkey")
console.log(animal)
//below only removes the last element (end of the list)
animal.pop()
console.log(animal)
