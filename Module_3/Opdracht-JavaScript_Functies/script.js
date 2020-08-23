// Deel A: Schrijf je eerste functie
// Make a sandwhich
// step 1 Put butter on the sandwhich
// step 2 add cheese to the sandwhich
// step 3 fold the sandwhich for a very Dutch experience

const makeSandwichWithCheese = function() {
    console.log("Put butter on sandwich");
    console.log("Add cheese to sandwich");
    console.log("Fold the sandwich for a very Dutch Experience");
  };
  
  makeSandwichWithCheese();

// Deel B: Scrijf een functie met argument
const makeSandwich = function(topping) {
    console.log("Put butter on sandwich");
    console.log("Add" + topping + "to sandwich");
    console.log("Fold the sandwich for a very Dutch Experience");
    console.log("There you go, a sandwich with... " + topping);
  };
  
  makeSandwich("pindakaas");
  
// Deel C: gebruik een return statement
// OPTIE 1
const calculateDiscountedPrice = function(totalAmount, discount) {
    console.log(Math.round(totalAmount - discount));
  };
  calculateDiscountedPrice(50, 2.5);
  
  // OPTIE 2
  const calculateDiscountedPrice = function(totalAmount, discount) {
    return Math.round(totalAmount - discount);
  };
  console.log(calculateDiscountedPrice(50, 2.5));
  
  // Weet jij het verschil tussen de twee? Wat doet return binnen een functie?
   
// Deel D: gebruik meerdere return statements
// OPTIE 1
const calculateDiscountedPrice = function(totalAmount, discount) {
    console.log(Math.round(totalAmount - discount));
  };
  const calculateDiscountedPriceClone = function(totalAmount, discount) {
    if (totalAmount > 25) {
      console.log(Math.round(totalAmount - discount));
    } else {
      console.log(totalAmount);
    }
  };
  calculateDiscountedPriceClone(50, 7.5);
  calculateDiscountedPriceClone(20, 2.5);
  
  // OPTIE 2
  const calculateDiscountedPrice = function(totalAmount, discount) {
    return Math.round(totalAmount - discount);
  };
  const calculateDiscountedPriceClone = function(totalAmount, discount) {
    if (totalAmount > 25) {
      return Math.round(totalAmount - discount);
    } else {
      return totalAmount;
    }
  };
  console.log(calculateDiscountedPriceClone(50, 7.5));
  console.log(calculateDiscountedPriceClone(20, 2.5));