const myApp = angular.module('myNewApp', ['ngRoute']);

myApp.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
      })
      .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'someController',
      })
      .otherwise({
        redirectTo: '/home',
      });
  },
]);

myApp.controller('someController', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.removeGeek = (geek) => {
      const removedGeekInd = $scope.geeks.indexOf(geek);
      $scope.geeks.splice(removedGeekInd, 1);
    };

    $scope.addGeek = () => {
      $scope.geeks.push({
        name: $scope.newName,
        age: $scope.newAge,
        available: true,
      });
      $scope.newName = '';
      $scope.newAge = '';
    };

    $http.get('data/geeks.json').then((res) => {
      $scope.geeks = res.data;
    });
  },
]);
