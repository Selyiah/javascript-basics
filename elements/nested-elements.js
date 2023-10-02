const love = document.getElementById("love");
const lovedItems = love.getElementsByTagName("li");

for (let i = 0; i < lovedItems.length; i++) {
  const loved = lovedItems[i];
  loved.textContent = loved.textContent + " 💖";
}

const ugh = document.getElementById("ugh");
const ughItems = 
ugh.getElementsByTagName("li");

for (let i = 0; i < ughItems.length; i++) {
  const ugh = ughItems[i];
  ugh.textContent = ugh.textContent + "🤢";
}
