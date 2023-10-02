//using while loop
let emojiworldbegins = 5

while (emojiworldbegins > 0){
 console.log(emojiworldbegins)
emojiworldbegins-- // decrement
}

//arrays
console.log(" Welcome to Emoji World 🏆 ")

let emoji = ["😀", "😞", "😩", "😠", "🤩"]

for (let index = 0; index < emoji.length; index++){
  console.log(emoji[index])
}

emoji.pop()
console.log(emoji)

emoji.push("🥰", "🤢")
console.log(emoji)

emoji. splice(1,1)

emoji.splice(1, 0, "😭","🤗")
console.log(emoji)

emoji.splice(2,1, "😘")
console.log(emoji)

emoji.unshift("🥰","🤢")
console.log(emoji)

emoji.shift()
console.log(emoji)

const emotions = { //objects
  happy: "😀",
  sad: "😞",
  tired: "😩",
  angry: "😠", 
  excited: "🤩", 
  // nested objects 
  bonusfeelings: {
    love: "🥰", 
    sick: "🤢"
  },
  sayEmojis: function() { // method
    // function
    console.log("Emoji life!");
  }
};

emotions.sayEmojis()

console.log(" In Emoji world I'm typically " + emotions.happy + " but sometimes i feel " + emotions.sad + " whilst I look for " + emotions.bonusfeelings.love + " and I feel " + emotions.bonusfeelings.sick + " even thinking about it and overall I'm " + emotions.tired + " but anytime I get asked on a date I feel " + emotions.excited + " again, not " + emotions.angry)
