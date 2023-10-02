// Select all p elements from our HTML document
// and form a collection 

let paragraphs = document.getElementsByTagName("p")
// Loop through the collection of p elements
// and change their colour to font family
for (let i=0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "green"
  paragraphs[i].style.fontFamily = "arial"
}

let header = document.getElementsByTagName("h1")

for(let i=0; i <header.length; i++) {
  header[i].style.color = "purple"
  header[i].style.fontfamily = "timesnewroman"
}
