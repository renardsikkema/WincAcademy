// Zelfde code, maar dan met arrow functions

// Stap 1
const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
  };
  
  // Stap 2
  const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
  };
  
  const klaarMetHuiswerk = () =>
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
  
  // Stap 3
  const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
  };
  
  const klaarMetHuiswerk = () =>
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
  
  huiswerkMaken("wiskunde", klaarMetHuiswerk);
  
  // Stap 4
  const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(function () {
      callback();
    }, 10000);
  };
  
  const klaarMetHuiswerk = () =>
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
  
  huiswerkMaken("wiskunde", klaarMetHuiswerk);
  