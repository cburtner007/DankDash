var dankDash = angular.module('dankDash', ['ionic']);

dankDash.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'screens/login/login.html'
  })
})

// creating the controller and inject Angular's $scope
dankDash.controller('mainController', function($scope) {

    // create a message to display in our view
    console.log ("GJ");
    $scope.message = 'Excited to build hybrid app';
});
