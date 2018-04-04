//Gewichte und Punkte der einzelnen möglichen Objekete
var Data = require('./Data');
var knapSack = Data.knapSack;
var maxWeight = Data.maxWeight;

//Konstruktor für die einzelnen Bestandteile der Population
function Chromosome(arr){

  //Die Gene des Chromosom
  this.values = arr;

  //Der errechnete Wert der Fitness-Funktion
  this.fitnessValue = 0;

  //Die Fitness-Funktion - Wird beim erstellen des Objektes evaluiert
  this.setFitnessValue = function(){

    //Summencontainer
    var fitnessValueTmp = 0;
    var weightCheckTmp = 0;

    //Durchlaufen des "Regelsatzes" und aufsummieren der gewählten Optionen
    for(i=0;i<=4;i++){
      fitnessValueTmp += this.values[i] * knapSack[1][i];
      weightCheckTmp += this.values[i] * knapSack[0][i];
    }

    //Wenn das Gewicht das Maximalgewicht übersteigt gibt die Fitness-Funktion 0 zurück
    if(weightCheckTmp>maxWeight) fitnessValueTmp = 0;

    //Setzen dess Attributs
    this.fitnessValue = fitnessValueTmp;
  }

  //Get-Funktion des Fitness-Wertes
  this.getFitnessValue = function(){
    return this.fitnessValue;
  }

  //Führt eine Kreuzung mit einem anderen Chromosom aus
  this.crossover = function(parent){
    //Setzt die Gene des aktuellen Objektes nach der Vorschrift um
    this.values = [this.values[0], this.values[1], this.values[2], parent.values[3], parent.values[4]];
    //Reevaluiert den Fitness Wert
    this.setFitnessValue();
  }

  //Mutiert das Chromosom
  this.mutate = function(){
    //Ermitteln eines beliebigen Gens
    var rand = Math.floor(Math.random()*this.values.length);

    //Invertieren des gefundenen Gens
    if(this.values[rand] == 0){
      this.values[rand] = 1;
    } else {
      this.values[rand] = 0;
    }

    //Reevaluiert den Fitness Wert
    this.setFitnessValue();
  }

  // Setzt den Fitness-Wert bei Aufruf des Konstruktors
  this.setFitnessValue();
}

//Bereitstellen des Konstruktors
module.exports = Chromosome
