const recipeList = document.getElementById("recipe-list");

function recipeView(recipes) {
recipeList.innerHTML ="";
recipes.forEach((recipe) => {
  const recipeDetails = document.createElement("li");
  recipeDetails.classList.add("recipe-details");
  recipeImage = document.createElement("img");
  recipeImage.src = recipe.image;
  recipeImage.alt = "Recipe picture";

  recipeName = document.createElement("h3");
  recipeName.classList.add("recipe-name");
  recipeName.innerHTML = recipe.title;

  recipeDescription = document.createElement("p");
  recipeDescription.classList.add("description");
  recipeDescription.innerHTML = 
  `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) =>
  ingredient.original).join(" -")}`;
  
  recipeButton = document.createElement("a");
  recipeButton.href = recipe.sourceUrl;
  recipeButton.innerText = "View Recipe";
    recipeButton.classList.add("click");

  
  recipeDetails.appendChild(recipeName);
  recipeDetails.appendChild(recipeImage);  
  recipeDetails.appendChild(recipeButton)
  recipeList.appendChild(recipeDetails);
  recipeDetails.appendChild(recipeDescription);

});

}

async function retrieveRecipes() {
  const retrieved = await fetch(
    `https://api.spoonacular.com/recipes/random?number=9&apiKey=df8fc39572bb4cc6a7e799c975762126`);
  const data = await retrieved.json();
  return data.recipes;
}

async function init() {
  const recipes = await retrieveRecipes();
  //console.log(recipes);
  recipeView(recipes);
}

init();
