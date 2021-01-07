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
  const totalDistance = this.journeys.reduce( (acc, journey) => {
    return acc + journey.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const journeysByTransport = this.journeys.map( (journey) => {
    return journey.transport;
  });

  const uniqueTransport = journeysByTransport.filter( (journey, index) => {
    return journeysByTransport.indexOf(journey) === index;
  });
  return uniqueTransport;
};


module.exports = Traveller;
