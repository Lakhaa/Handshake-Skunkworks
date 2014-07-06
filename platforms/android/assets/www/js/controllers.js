angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('ServicesCtrl', function($scope, Services) {
  $scope.services = Services.all();
})

.controller('ServiceDetailCtrl', function($scope, $stateParams, Services) {
  $scope.service = Services.get($stateParams.serviceId);
})

.controller('AccountCtrl', function($scope) {
});
