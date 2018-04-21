var dankDash = angular.module('dankDash', ['ionic'])

// creating the controller and inject Angular's $scope
dankDash.controller('mainController', ['$scope', '$state', function($scope, $state) {
    $scope.$state = $state;
    //$state.transitionTo('index');
  //  console.log ("GJ");
    console.log("state is:_" + $state.current.name+"-");
    //$scope.message = 'Excited to build hybrid app';
}]);

dankDash.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/index',
    templateUrl: '/app/screens/login/login.html'
  });

  //$urlRouterProvider.otherwise("/index");
})
