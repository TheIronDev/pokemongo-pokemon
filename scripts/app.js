angular.module('pokemonGoPokemon', [])
  .controller('pokemonGoPokemonCtr', function($scope, $http) {

    $scope.isLoading = true;
    $scope.orderDescending = false;
    $scope.pokemonOrder = 'id';

    $scope.changeOrder = function(newOrder) {
      if ($scope.pokemonOrder === newOrder) {
        $scope.orderDescending = !$scope.orderDescending;
      } else {
        $scope.orderDescending = false;
      }
      $scope.pokemonOrder = newOrder;
    };

    // Populate the pokemon table
    $http({
      method: 'GET',
      url: './data/pokemon.json'
    }).then(function successCallback(response) {
      $scope.pokemonList = response.data;
      $scope.isLoading = false;
    }, function errorCallback(response) {});
  });