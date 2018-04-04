//Import der benötigten Module
var Chromosome = require('./Chromosome');

//Konstruktor für die Population
function Population(arr){
  //Erstellen der Generation 0
  this.elements = arr;

  //Ermitteln des höchsten Fitness-Wertes in der Population
  this.getBestScore = function(){
    //Wertezwischenspeicher
    var tmp;

    //Durchlaufen aller Elemente
    for(e of this.elements){
      //Wenn noch kein Element gefunden wurde wird das erste hinzugefügt
      if(typeof tmp == "undefined"){
        tmp = e.getFitnessValue();
    //Ist der aktuelle Fitness-Wert größer als der vorherige -> austauschen
    } else if(e > tmp){
        tmp = e.getFitnessValue();
      }
    }
    //Rückgabe des gemerkten Wertes
    return tmp;
  }


  //Ermittelt ein Chromosom mittels des Selektions-Algorithmus
  this.getParentObject = function(){
    //Wertezwischenspeicher
    var tmp = 0;

    //Durchlaufen der Elemente und ermitteln der gesamten Fitness-Werte der Population
    for (let e of this.elements){
      //Zum Gesamtwert addieren
      tmp += e.getFitnessValue();
    }

    //Wenn bei allen Chromosomen alle Gene 0 sind wird das erste Chromosom zurück gegeben
    if(tmp == 0){
      return this.elements[0];
    }

    //Ermitteln der Zufallszahl
    tmp = (Math.floor(Math.random() * tmp) + 1);

    //Anlegen der Grenzen
    var upperBorder = 0;
    var lowerBorder = 0;

    //Durchaufen der Elemente und finden des Passenden Chromosoms
    for(let e of this.elements){
      //Erhöhen der oberen Grenze
      upperBorder += e.getFitnessValue();
      //Prüfung ob der ermittelte Wert zwischen den Grenzen iegt
      if(tmp > lowerBorder && tmp <= upperBorder){
        //Rückgabe des gefundenen Chromosoms
        return e;
      }

      //Erhöhen der unteren Grenze
      lowerBorder += e.getFitnessValue();
    }
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
