//Import der benötigten Module
var Chromosome = require('./Chromosome');
var Population = require('./Population');


//Erstellen der Test-Chromosome - Rucksack Problem
var Chr1 = new Chromosome([0,1,0,1,0]);
var Chr2 = new Chromosome([0,1,1,0,1]);
var Chr3 = new Chromosome([1,0,0,0,1]);

//Erstellen der Generation 0
var population = new Population([Chr1, Chr2, Chr3]);

//Zähler für die Iterationen bis zum gewünschten Ergebnis
var i = 0;

//Wir führen den Algorithmus aus bis wir die 28 - also den best möglichen Lösungsansatz finden
while(population.getBestScore()<28){
  //Iterator erhöhen
  i++;
  //Erzeugen der nächsten Generation
  population = population.generateNextGeneration(100, 30, 5);
}

//Ausgabe der Anzahl der Iterationen
console.log("Aktuelle Generation: ");
console.log(population.elements);
console.log("");
console.log("Benötigte Iterationen: " + i);
console.log("");
console.log("Bestes erreichtes Rating der aktuellen Generation: " + population.getBestScore());
