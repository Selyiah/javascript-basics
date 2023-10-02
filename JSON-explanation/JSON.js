// First we will take a look at creating a javaScript object
function objectOutput(colour, animal, dataType) {
    const object = {colour, animal, dataType}
    console.log(object)
}
objectOutput("blue","giraffe","object")
// 
// Now we will take a look at converting an object into some JSON
function jsonOutput(colour, animal, dataType) {
    let object = {colour, animal, dataType}
    console.log(object)
    //now we will turn that object into JSON
    //to do that it must first be a string
    const string = JSON.stringify(object)

    //then we will turn it into JSON
    const json = JSON.parse(string)
    console.log(json);
}
jsonOutput("green","koala","JSON")

// We can ofcause just take a string and change that directly into some JSON:
const string = '{"colour": "purple", "animal":"penguin", "dataType": "JSON"}';
const json = JSON.parse(string)
console.log(json);

