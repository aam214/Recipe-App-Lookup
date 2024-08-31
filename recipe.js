const recipeList = document.getElementById(recipe-list);


function recipeView(recipes) {
recipeList.innerHTML ="";
}

async function retrieveRecipes() {
  const retrieved = 
  await fetch(`https://api.spoonacular.com/recipes/random?number=9&apiKey=df8fc39572bb4cc6a7e799c975762126`);
  const data = await retrieved.json();
  return data.recipes;
}

async function init() {
  const recipes = await retrieveRecipes();
  //console.log(recipes);
}

init();