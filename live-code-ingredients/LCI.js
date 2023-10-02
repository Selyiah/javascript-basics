// Array of available ingredients
const ingredients = [
  "Basil",
  "Cumin",
  "Coriander",
  "Oregano",
  "Thyme",
  "Rosemary",
  "Turmeric",
  "Paprika",
  "Cinnamon",
  "Saffron",
  "Ginger",
  "Cardamom",
  "Fenugreek",
  "Cloves",
  "Bay Leaves"
];

// Function to generate a recipe
function generateRecipe() {
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = "";

  const randomIngredients = getRandomIngredients(6);

  // Loop through all ingredients and create list items
  for (let i = 0; i < randomIngredients.length; i++) {
    const ingredient = randomIngredients[i];
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    recipeList.appendChild(listItem);
  }
}

// Function to get random ingredients
function getRandomIngredients(count) {
  const randomIngredients = [];
  const ingredientsCopy = ingredients.slice();

  // Pick random ingredients from the array
  while (randomIngredients.length < count) {
    const randomIndex = Math.floor(Math.random() * ingredientsCopy.length);
    // The array splice() function starts at the randomIndex position and delete 1 item from the original array. It also returns the deleted item as an array, which we store in pickedIngredient. This guarantees that we can't reselect the same item from the original array later (as it's been deleted).
    // For more details, please see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    const pickedIngredient = ingredientsCopy.splice(randomIndex, 1)[0];
    randomIngredients.push(pickedIngredient);
  }
  return randomIngredients;
}

function getRandomProtein() {
  const proteinsCopy = proteins.slice();
  const randomIndex = Math.floor(Math.random() * proteinsCopy.length);
}
