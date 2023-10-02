//objects
const invisiblewomen = {
  title: "Invisible Women",
  subtitle: "Exposing the gender bias women face everyday",
  author: "Carolina Perez",
  year: 2019
}

console.log(invisiblewomen.title)
console.log(invisiblewomen.subtitle)
console.log(invisiblewomen.author)
console.log(invisiblewomen.year)

console.log(invisiblewomen.title + " : " + invisiblewomen.subtitle)



//objects & nested objects 

let girl = {
  name: "Ana", //string
  age: 23, //number
  friends: ["Michelle, Aqkua and Adaeze"], //array
  address: {
    //object //nested object below as well
    number: 123,
    street: "Chelsea Road",
    city: "London"
  }
};

console.log(girl.name + " lives in " + girl.address.city)
console.log(girl.name + ", age " + girl.age + " has 3 friends, " + girl.friends + " and she lives in " + girl.address.street)



const holiday = {
  location: "Greece",
  friends: ["Aqkua and Naomi"],
  time: "8 days",
  hotel: {
    //nested object
    name: "Princess Sun",
    type: "all includsive",
    room: "one"
  }
};

console.log(holiday.location + " with my friends " + holiday.friends + ", going for " + holiday.time + " staying at " + holiday.hotel.name)
