var travellingSalesman = {
  Berlin: {
    München: 585,
    Stuttgart: 632,
    Bonn: 601,
    Hamburg: 289,
    Frankfurt: 545,
    Rostock: 234,
    Potsdam: 35
  },
  München: {
    Berlin: 585,
    Stuttgart: 233,
    Bonn: 560,
    Hamburg: 791,
    Frankfurt: 392,
    Rostock: 778,
    Potsdam: 554
  },
  Stuttgart: {
    Berlin: 632,
    München: 233,
    Bonn: 352,
    Hamburg: 656,
    Frankfurt: 204,
    Rostock: 826,
    Potsdam: 602
  },
  Bonn: {
    Berlin: 601,
    München: 560,
    Stuttgart: 352,
    Hamburg: 462,
    Frankfurt: 173,
    Rostock: 628,
    Potsdam: 565
  },
  Hamburg: {
    Berlin: 289,
    München: 791,
    Stuttgart: 656,
    Bonn: 462,
    Frankfurt: 492,
    Rostock: 181,
    Potsdam: 283
  },
  Frankfurt: {
    Berlin: 545,
    München: 392,
    Stuttgart: 204,
    Bonn: 173,
    Hamburg: 492,
    Rostock: 669,
    Potsdam: 516
  },
  Rostock: {
    Berlin: 234,
    München: 778,
    Stuttgart: 826,
    Bonn: 628,
    Hamburg: 181,
    Frankfurt: 669,
    Potsdam: 224
  },
  Potsdam: {
    Berlin: 35,
    München: 554,
    Stuttgart: 602,
    Bonn: 565,
    Hamburg: 283,
    Frankfurt: 516,
    Rostock: 224
  }
}

var knapSack = [[5,2,5,10,5],[10,5,8,15,13]];
var maxWeight = 12;

module.exports.travellingSalesman = travellingSalesman;
module.exports.knapSack = knapSack;
module.exports.maxWeight = maxWeight;
