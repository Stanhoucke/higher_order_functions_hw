const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map( (journey) => {
    return journey.startLocation;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map( (journey) => {
    return journey.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const filteredJourneys = this.journeys.filter ( (journey) => {
    return journey.transport === transport;
  });
  return filteredJourneys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const filteredJourneys = this.journeys.filter( (journey) => {
    return journey.distance > minDistance;
  });
  return filteredJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
