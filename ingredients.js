var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;
while (repeat < ingredients.Length) {
  console.log(ingredients);
  repeat++;
}
console.log(ingredients);

// Write a for loop that prints out the contents of ingredients:

var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for (var repeat = 0; repeat < ingredients.Length; repeat++) {
  console.log(ingredients);
}
console.log(ingredients);

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for (var i = ingredients.length-1; i>=0; i--) {
  console.log(ingredients[i]);
}