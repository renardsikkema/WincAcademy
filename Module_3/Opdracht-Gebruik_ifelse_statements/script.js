// Deel 1:
const age = 18;

if (age == 18){
    console.log("Je mag naar binnen!")
} else if (age > 18){
    console.log("Je mag naar binnen!")
} else{
    console.log("Je mag NIET naar binnen!")
}

// Deel 2:
const isFemale = true;

if (isFemale == true){
    console.log("Dit is een vrouw!")
} else{
    console.log("Dit is GEEN vrouw!")
}

// Deel 3:
const driverStatus = 'bob';

if (driverStatus == 'bob'){
    console.log("Je mag rijden!")
} else{
    console.log("Je mag NIET rijden!")
}

// OPLOSSING!!
// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.
const age = 18;
const isFemale = true;
const driverStatus = "bob";

/*
Testdata
const age = 16; 
const isFemale = false;
const driverStatus = 808; 
*/

if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
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
