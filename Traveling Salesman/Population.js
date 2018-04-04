//Import der benötigten Module
var Chromosome = require('./Chromosome');

//Konstruktor für die Population
function Population(arr){
  //Erstellen der Generation 0
  this.elements = arr;
  //Festlegung der Turniergröe
  this.tournamentSize = 4;

  //Ermitteln des höchsten Fitness-Wertes in der Population
  this.getBestScore = function(){
    //Wertezwischenspeicher
    var tmp;

    //Durchlaufen aller Elemente
    for(e of this.elements){
      //Wenn noch kein Element gefunden wurde wird das erste hinzugefügt
      if(typeof tmp == "undefined"){
        tmp = e.getFitnessValue();
      //Ist der aktuelle Fitness-Wert kleiner (Strecke ist kürzer) als der vorherige -> austauschen
    } else if(e.getFitnessValue() < tmp){
        tmp = e.getFitnessValue();
      }
    }
    //Rückgabe des gemerkten Wertes
    return tmp;
  }

  this.getBestItem = function(){
    //Wertezwischenspeicher
    var tmp;

    //Durchlaufen aller Elemente
    for(e of this.elements){
      //Wenn noch kein Element gefunden wurde wird das erste hinzugefügt
      if(typeof tmp == "undefined"){
        tmp = e;
      //Ist der aktuelle Fitness-Wert kleiner (Strecke ist kürzer) als der vorherige -> austauschen
      } else if(e.getFitnessValue() < tmp.getFitnessValue()){
        tmp = e;
      }
    }
    //Rückgabe des gemerkten Wertes
    return tmp;
  }

  //Ermittelt ein Chromosom mittels des (4 Way-Tournament) Selektions-Algorithmus
  this.getParentObject = function(){
    //Anlegen von Zwischenspeichern
    var tmpArr = [];
    var tmp;

    //Zufälliges ziehen von 4 Elementen
    for(var i=0; i<this.tournamentSize; i++){
      tmpArr.push(this.elements[Math.floor(Math.random()*this.elements.length)]);
    }

    //Ermitteln des Elements mit dem größten Fitness-Wert in der Ziehung
    for(let e of tmpArr){
      //Wenn noch kein Element gezogen wurde, wird das erste gewählt
      if(typeof tmp == "undefined"){
        tmp = e;
      //Ist der Fitness-Wert kleiner (Strecke ist kürzer) wird das Element gewählt
      } else if(e.getFitnessValue()<tmp){
        tmp = e;
      }
    }

    //Rückgabe des Ermittelten Siegers
    return tmp
  }

  //Erstellen einer neuen Generation
  this.generateNextGeneration = function(itemCount, crossoverChance, mutationChance){
    //Anlegen eines leeren Populationsobjektes
    let newPopulation = new Population([]);

    //Solange die gewünschte Populationsgröße noch nicht erreicht ist wird widerholt
    while(newPopulation.elements.length < itemCount){
      //Herausholen eines Wertes aus der Population mittels Selektions-Algorithmus
      let tmp = this.getParentObject();

      //Zufallsprüfung ob gekreuzt wird
      if(Math.floor(Math.random()*100)<=crossoverChance){
        //Kreuzung mit einem weiteren mittels Selektion gewählten Objekts
        tmp.crossover(this.getParentObject());
      }

      //Zufallsprüfung ob gekreuzt wird
      if(Math.floor(Math.random()*100)<=mutationChance){
        //Mutation des aktuellen Objektes
        tmp.mutate();
      }

      //Hinzufügen eines neuen Objektes zur PopulationH
      newPopulation.elements.push(tmp);
    }

    //Rückgabe der neu erstellten Generation
    return newPopulation;
  }

}

//Bereitstellen des Konstruktors
module.exports = Population;
