
export function makeIngridientsArr(drinks) {
    return  drinks.map((drink) => {
        let arr = [];
        for (let i = 1; i <= 15; i++){
            let nameOfProp = `strIngredient${i}`;
            if(drink[nameOfProp] !== null) {
                arr.push(drink[nameOfProp]);
            }
        }
        return arr
    });
}

// const drinks = data.drinks;
// const ingridientsArr = await makeIngridientsArr(drinks);
// console.log(ingridientsArr);