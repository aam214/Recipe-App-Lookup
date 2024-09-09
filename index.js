const recipeList = document.getElementById("recipe-list");

function recipeView(recipes) {
recipeList.innerHTML ="";
recipes.forEach((recipe) => {
  const recipeDetails = document.createElement("li");
  recipeDetails.classList.add("recipe-details");
  
  const recipeImage = document.createElement("img");
  recipeImage.src = recipe.image;
  recipeImage.alt = "Recipe picture";

  const recipeName = document.createElement("h3");
  recipeName.classList.add("recipe-name");
  recipeName.innerHTML = recipe.title;

  const ingredientShow = document.createElement('div');
  ingredientShow.classList.add('ingredient-show');
  //initially hidden
  ingredientShow.style.display = 'none';
  
  
  const recipeDescription = document.createElement("p");
  recipeDescription.classList.add("description");
  recipeDescription.innerHTML = 
  `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) =>
  ingredient.original).join(" -")}`;
  
ingredientShow.appendChild(recipeDescription);

  const recipeButton = document.createElement("a");
  recipeButton.href = recipe.sourceUrl;
  recipeButton.innerText = "View Recipe";
  recipeButton.classList.add("click");
  recipeButton.target = "_blank"; 
  recipeButton.rel = "noopener noreferrer";

  recipeDetails.addEventListener('click', () => {
    if (ingredientShow.style.display === "none") {
      ingredientShow.style.display = "block";
    } else {
      ingredientShow.style.display ="none";
    }
  });
  recipeDetails.appendChild(recipeButton);
  recipeDetails.appendChild(recipeName);
  recipeDetails.appendChild(recipeImage); 
  
  recipeDetails.appendChild(ingredientShow);
  recipeList.appendChild(recipeDetails);
});

}

async function retrieveRecipes() {
  const retrieved = await fetch(
    `https://api.spoonacular.com/recipes/random?number=12&apiKey=7f883a94fb85461693896f4af2459f57`);
  const data = await retrieved.json();
  return data.recipes;
}

async function init() {
  const recipes = await retrieveRecipes();
  //console.log(recipes);
  recipeView(recipes);
}

init();

