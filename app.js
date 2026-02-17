// ===============================
// ORIGINAL DATA (DO NOT MUTATE)
// ===============================

const recipes = [
  { name: "Pasta", difficulty: "Easy", time: 20 },
  { name: "Biryani", difficulty: "Hard", time: 60 },
  { name: "Sandwich", difficulty: "Easy", time: 10 },
  { name: "Cake", difficulty: "Medium", time: 45 },
  { name: "Salad", difficulty: "Easy", time: 15 },
  { name: "Pizza", difficulty: "Medium", time: 30 }
];

// ===============================
// STATE
// ===============================

let currentFilter = "ALL";
let currentSort = "NONE";

// ===============================
// PURE FILTER FUNCTION
// ===============================

const filterRecipes = (recipeList, filterType) => {
  switch (filterType) {
    case "EASY":
      return recipeList.filter(r => r.difficulty === "Easy");

    case "MEDIUM":
      return recipeList.filter(r => r.difficulty === "Medium");

    case "HARD":
      return recipeList.filter(r => r.difficulty === "Hard");

    case "QUICK":
      return recipeList.filter(r => r.time < 30);

    default:
      return recipeList;
  }
};

// ===============================
// PURE SORT FUNCTION
// ===============================

const sortRecipes = (recipeList, sortType) => {
  const copied = [...recipeList]; // prevent mutation

  switch (sortType) {
    case "NAME":
      return copied.sort((a, b) => a.name.localeCompare(b.name));

    case "TIME":
      return copied.sort((a, b) => a.time - b.time);

    default:
      return copied;
  }
};

// ===============================
// DISPLAY FUNCTION
// ===============================

const displayRecipes = (recipeList) => {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";

  recipeList.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "recipe";
    div.innerHTML = `
      <strong>${recipe.name}</strong><br>
      Difficulty: ${recipe.difficulty}<br>
      Time: ${recipe.time} minutes
    `;
    container.appendChild(div);
  });
};

// ===============================
// CENTRAL UPDATE FUNCTION
// ===============================

const updateDisplay = () => {
  const filtered = filterRecipes(recipes, currentFilter);
  const sorted = sortRecipes(filtered, currentSort);
  displayRecipes(sorted);
};

// ===============================
// BUTTON FUNCTIONS
// ===============================

const setFilter = (filterType) => {
  currentFilter = filterType;
  updateDisplay();
};

const setSort = (sortType) => {
  currentSort = sortType;
  updateDisplay();
};

// Initial Load
updateDisplay();