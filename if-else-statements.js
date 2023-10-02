// Store the user's input in a variable
const response = prompt("books vs movies");
// If response is "books"
if (response === "books") {
  console.log("📚");
}

// Else - If response is not "books"
else {
  console.log("🍿🍿");
}

//if else statements OR operator 
// Store the user's input in a variable 
const response = prompt("books vs movies");
// If response is "books" or "Books"
if (response === "books" || response === "Books") {
  console.log("📚");
}

// Else - If response is not "books"
else {
  console.log("🍿🍿");
}

//else if 
// Store the user's input in a variable 
const response = prompt("books vs movies");
//If response is "books" or "Books"

if (response === "books" || response === "Books") {
  console.log("📚");
}
// Else if the response is "movie" or "Movies"
else if (response === "movies" || response === "Movies") {
  console.log("🍿🍿");
}

// Else - If response is not "books" or "movies" or "Movies"
else {
  console.log("🤨");
}
