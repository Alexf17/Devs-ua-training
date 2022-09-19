export function createIngridientsEl(data) {
  let ingredients = [];
      for (let i = 1; i <= 15; i++) {
        let nameOfProp = `strIngredient${i}`;
        if (card[nameOfProp] !== null) {
          ingredients.push(card[nameOfProp]);
        }
      }
      let liMarkupFin = ``;
      for (let i = 0; i < ingredients.length; i++) {
        let value = ingredients[i];
        let liItemMarkup = `<li class="ingredients__item">${value}</li>`;
        liMarkupFin += liItemMarkup;
      }
  return liMarkupFin
}

export function createIngridientsStr(data) {
  let ingredients = [];
      for (let i = 1; i <= 15; i++) {
        let nameOfProp = `strIngredient${i}`;
        if (data[nameOfProp] !== null) {
          ingredients.push(data[nameOfProp]);
        }
      }
  const ingredientsStr = ingredients.join(', ');
  return ingredientsStr
}