export const ingredientNav = (ingredients, filterName) => {
  return (
    ingredients.filter((ingredient) => ingredient.type === filterName)
  );
};