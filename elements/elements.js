// Creating a new header element
let header = document.createElement("h2");
//define the content of the new header element
header.textContent =
  "Hello again! I was added by using document.createElement()";
//attaching the new header element to an existing element of my HTML page which is body
document.body.appendChild(header);
