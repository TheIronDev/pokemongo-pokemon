angular.module('pokemonGoPokemon', [])
  .controller('pokemonGoPokemonCtr', function($scope) {

    // adding some mock data to get started
    $scope.pokemonList = [{
      "name": "bulbasaur",
      "id": 1,
      "familyId": 1,
      "parentId": null,
      "candy": 25,
      "captureRate": 0.16,
      "fleeRate": 0.1,
      "attack": 126,
      "defense": 126,
      "stamina": 90
    },
      {
        "name": "ivysaur",
        "id": 2,
        "familyId": 1,
        "parentId": 1,
        "candy": 100,
        "captureRate": 0.08,
        "fleeRate": 0.07,
        "attack": 156,
        "defense": 158,
        "stamina": 120
      },
      {
        "name": "venusaur",
        "id": 3,
        "familyId": 1,
        "parentId": 2,
        "candy": 0,
        "captureRate": 0.04,
        "fleeRate": 0.05,
        "attack": 198,
        "defense": 200,
        "stamina": 160
      },
      {
        "name": "charmander",
        "id": 4,
        "familyId": 10,
        "parentId": null,
        "candy": 25,
        "captureRate": 0.16,
        "fleeRate": 0.1,
        "attack": 128,
        "defense": 108,
        "stamina": 78
      },
      {
        "name": "charmeleon",
        "id": 5,
        "familyId": 10,
        "parentId": 4,
        "candy": 100,
        "captureRate": 0.08,
        "fleeRate": 0.07,
        "attack": 160,
        "defense": 140,
        "stamina": 116
      },
      {
        "name": "charizard",
        "id": 6,
        "familyId": 10,
        "parentId": 5,
        "candy": 0,
        "captureRate": 0.04,
        "fleeRate": 0.05,
        "attack": 212,
        "defense": 182,
        "stamina": 156
      }];
  });