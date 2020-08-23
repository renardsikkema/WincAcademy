// Deel 1:
const age = 18;

if (age == 18){
    console.log("Je mag naar binnen!")
} else if (age > 18){
    console.log("Je mag naar binnen!")
} else{
    console.log("Je mag NIET naar binnen!")
}

if (age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!")
} else{
    console.log("Je krijgt GEEN 50% korting!")
}

// Deel 2:
const name = 'sarah';

if (name == 'sarah' || name == 'bram'){
    console.log("Je krijgt een gratis biertje!")
} else{
    console.log("Je krijgt NIET een gratis biertje!")
}

// Deel 3:
const totalAmount = 100;

if (totalAmount >= 25 && totalAmount < 49){
    console.log("Je krijgt gratis (VEGA)BITTERBALLEN!")
} else if(totalAmount >= 50 && totalAmount < 99){
    console.log("Je krijgt gratis een portie NACHOS!")
} else if(totalAmount >= 100){
    console.log("Je krijgt gratis een flesje CHAMPAGNE!")
} else{
    console.log("Je krijgt NIKS!")
}

// OPLOSSING!!
// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 10 tot 15 weer aan, en regel 3 tot 8 uit.
const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = 27;

/*
Testdata
const age = 16; 
const isFemale = false;
const driverStatus = 'b0b'; 
const name = 'Niels';
const totalAmount = 5;
*/

if (age >= 18) {
  console.log("Je bent 18 jaar of ouder, je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting op je biertje");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Je naam is Sarah of Bram, je krijgt een gratis biertje!");
} else {
  console.log("Je doet niet mee aan onze ludieke Sarah Abraham actie");
}

if (totalAmount >= 100) {
  console.log("gratis flesje champagne.");
} else if (totalAmount > 50) {
  console.log("gratis portie nachos");
} else if (totalAmount > 25) {
  console.log("gratis (vega)bitterballen");
} else {
  console.log("Helaas geen korting, maar leuk dat je er bent");
}
