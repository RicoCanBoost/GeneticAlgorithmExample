//Import der benötigten Module
var Chromosome = require('./Chromosome');
var Population = require('./Population');

//Erstellen der Test-Chromosome - Travelling Salesman Problem
var Chr0 = new Chromosome(['Stuttgart','Berlin','Frankfurt','Bonn','Rostock','München','Hamburg','Potsdam']);
var Chr1 = new Chromosome(['Stuttgart','München','Potsdam','Rostock','Berlin','Frankfurt','Bonn','Hamburg']);
var Chr2 = new Chromosome(['Potsdam','Frankfurt','Hamburg','Stuttgart','Rostock','Bonn','Berlin','München']);
var Chr3 = new Chromosome(['Potsdam','Frankfurt','Hamburg','Berlin','Rostock','Bonn','München','Stuttgart']);
var Chr4 = new Chromosome(['Hamburg','Bonn','München','Stuttgart','Frankfurt','Rostock','Potsdam','Berlin']);
var Chr5 = new Chromosome(['München','Berlin','Bonn','Stuttgart','Frankfurt','Hamburg','Potsdam','Rostock']);
var Chr6 = new Chromosome(['Stuttgart','Rostock','Potsdam','Bonn','Hamburg','München','Berlin','Frankfurt']);
var Chr7 = new Chromosome(['Stuttgart','Frankfurt','Bonn','München','Berlin','Potsdam','Hamburg','Rostock']);
var Chr8 = new Chromosome(['Berlin','München','Frankfurt','Hamburg','Bonn','Stuttgart','Rostock','Potsdam']);
var Chr9 = new Chromosome(['Bonn','Frankfurt','Rostock','Hamburg','Potsdam','Stuttgart','Berlin','München']);

//Erstellen der Generation 0
var population = new Population([Chr0, Chr1, Chr2, Chr3, Chr4, Chr5, Chr6, Chr7, Chr8, Chr9]);

//Zähler für die Iterationen bis zum gewünschten Ergebnis
var i = 0;

//Speicher für dast Beste Ergebnis über alle Generationen
var bestValues = [];
var bestValue;

//Durchführen von 10 Iterationen
for(i=0;i<10;i++){
  //Erzeugen der nächsten Generation
  bestValues.push(population.getBestItem());
  population = population.generateNextGeneration(10, 40, 5);
}

//Ermitteln des "Ewigen Siegers"
for(let e of bestValues){
  if(typeof bestValue == "undefined"){
    bestValue = e;
  } else if(e.getFitnessValue() < bestValue.getFitnessValue()){
    bestValue = e;
  }
}


//Ausgabe der Anzahl der Iterationen
console.log("Aktuelle Generation: ");
console.log(population.elements);
console.log("");
console.log("Benötigte Iterationen: " + i);
console.log("");
console.log("Bestes erreichtes Rating der aktuellen Generation: " + population.getBestScore());
console.log("");
console.log("Bestes erreichtes Rating aller Generationen: ");
console.log(bestValue);
