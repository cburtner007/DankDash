angular.module('dankDash.controllers')

// creating the controller and inject Angular's $scope
.controller('loginCtrl', loginCtrl)

loginCtrl.$inject = ['$scope'];

function loginCtrl($scope) {

    // create a message to display in our view
    console.log ("GJ");
    $scope.message = 'Excited to build hybrid app';
}
