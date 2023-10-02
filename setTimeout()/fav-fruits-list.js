const list = document.getElementById("fruits");
const items = list.getElementsByTagName("li");
// console.log(items[4])

//Find the index of the last item
let index = items.length - 1;

function showNextItem() {
    if (index >= 0) {
        items[index].style.visibility = "visible";
        index--; //count down
        //delay in milliseconds (one second)
        setTimeout(showNextItem, 1000);
    }
}

showNextItem();

// Add a function to add a gold star emoji to the web page and call that function 0.5 seconds after revealing the whole list.⭐

//I create a new variable starSection which is looking at my element which has the id named star in HTML
const starSection = document.getElementById('star');

const randomTime =  1500;

//the starsection content is updated after a randomtime that i assigned to 1500 seconds atm but you can change it
setTimeout(() => {
    starSection.textContent = '⭐';
}, randomTime);
