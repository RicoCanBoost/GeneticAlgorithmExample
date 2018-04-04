//Import der benötigten Module
var Data = require('./Data');
var travellingSalesman = Data.travellingSalesman;

//Konstruktor für die einzelnen Bestandteile der Population
function Chromosome(arr){
    //Die Gene des Chromosom
    this.values = arr;

    //Der errechnete Wert der Fitness-Funktion
    this.fitnessValue = 0;

    //Die Fitness-Funktion - Wird beim erstellen des Objektes evaluiert
    this.setFitnessValue = function(){
      //Wertezwischenspeicher
      var tmp = 0;
      //Addierung aller Streckenelemente
      for(i=0; i<=this.values.length-1; i++){
        //Wenn wir am letzten Index ankommen wird die Strecke zurück zum Start addiert
        if(i == this.values.length-1){
          tmp += travellingSalesman[this.values[i]][this.values[0]];
        //Addieren der einzelnen Strecken in den Zwischenspeicher
        } else {
          tmp += travellingSalesman[this.values[i]][this.values[i+1]];
        }
      }
      //Rückgabe der Summe aller Streckenlängen
      this.fitnessValue = tmp;
    };

    //Get-Funktion des Fitness-Wertes
    this.getFitnessValue = function(){
      return this.fitnessValue;
    };

    //Führt eine Kreuzung mit einem anderen Chromosom aus
    this.crossover = function(parent){
      //Wertezwischenspeicher
      var tmpArr = [];

      //Einfügen der ersten 4 Elemente in den Zwischenspeicher
      tmpArr = this.values.splice(0,4);

      //Setzt die Gene des aktuellen Objektes nach der Vorschrift um
      for(let e of parent.values){
        if(!tmpArr.includes(e)){
          tmpArr.push(e);
        }
      }

      //Umsetzen der Werte und neuevaluation der Fitness-Funktion
      this.values = tmpArr;
      this.setFitnessValue();
    };

    //Mutiert das Chromosom
    this.mutate = function(){
      //Ermitteln eines beliebigen Gens
      var rand = Math.floor(Math.round()*10);
      var tmp = this.values[rand]

      //Drehen von einem zufällig gefundenen Testwert nach vorne / bzw. beim letzten Wert nach hinten
      if(rand < 9){
        this.values[rand] = this.values[rand+1]
        this.values[rand+1] = tmp;
      } else {
        this.values[rand] = this.values[rand-1]
        this.values[rand-1] = tmp;
      }
    };

    // Setzt den Fitness-Wert bei Aufruf des Konstruktors
    this.setFitnessValue();
}

//Bereitstellen des Konstruktors
module.exports = Chromosome;
