// Select all p elements from our HTML document
// and form a collection 
let myClass = document.getElementsByClassName("my-class")

// Loop through the collection of p elements
// and change their colour to font family
for (let i=0; i < myClass.length; i++) {
  myClass[i].style.color = "pink"
  myClass[i].style.fontStyle = "italic"
}


let secondClass = document.getElementsByClassName("second-class");

for (let i=0; i < secondClass.length; i++) {
  secondClass[i].style.color = "green"
  secondClass[i].style.fontStyle = "strong"
}
