//to find inspect on any website to see the coding. On Chrome > ... on the right side> more tools > developer tools 

document.write("Hello 👋")

const value = document.getElementById("message").textContent;
let result = " ";

for (let i = 0; i < 10; i++){
  result += value + " ";
}

document.getElementById("message").textContent = result; 

//there's a HTML counterpart, please find in folder 
