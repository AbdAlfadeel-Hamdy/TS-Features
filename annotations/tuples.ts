const drinkObj = {
  color: "black",
  carbonated: true,
  sugar: 40,
};
// Type Alias
type Drink = [string, boolean, number];
const drinkTuple: Drink = ["black", true, 40];
// drinkTuple[2] = "black";
// drinkTuple[0] = 40;
// drinkTuple.pop();
console.log(drinkTuple);
const tea: Drink = ["black", false, 50];
