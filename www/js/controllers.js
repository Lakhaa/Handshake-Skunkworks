angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('CategoriesCtrl', function($scope, Categories) {
  $scope.categories = Categories.all();
})

.controller('ServiceDetailCtrl', function($scope, $stateParams, Categories) {
  $scope.category = Categories.get($stateParams.categoryId);
  if($stateParams.categoryId == 0)
	  $scope.subcategories = [
		{ id: 0, name: 'Women' },
		{ id: 1, name: 'Philosophy' },
		{ id: 2, name: 'Career' },
		{ id: 3, name: 'Business' }
	  ];
})

.controller('ServicesListCtrl', function($scope, $stateParams, SubCategories) {
	//alert($stateParams.subcategoryId);
  $scope.subcategory = SubCategories.get($stateParams.subcategoryId);
  if($stateParams.subcategoryId == 0)
	  $scope.names = [
		{ id: 0, name: 'Maya',price:"300", rating:"95%", image:"img/speaker-1.gif" },
		{ id: 1, name: 'Gopinath',price:"200", rating:"98%", image:"img/speaker-2.jpg"}
	  ];
})

.controller('AccountCtrl', function($scope) {
    
    $scope.names = [
	{ id: 0, name: 'Rayal Hall',price:"300", rating:"95%", category:"Venue", subcategory:"Party Hall" , image:"img/service-6.jpg" },
    { id: 1, name: 'Emily',price:"200", rating:"98%", category:"Artist", subcategory:"Dance", image:"img/service-1.jpg"},
    { id: 2, name: 'Delicious',price:"300", rating:"90%", category:"Caterer", subcategory:"Food" , image:"img/service-3.jpg"  },    
	{ id: 3, name: 'Fun Decorators',price:"300", rating:"95%", category:"Decorators", subcategory:"Modern" , image:"img/service-4.jpg" },
	{ id: 4, name: 'Chef Bakers',price:"100", rating:"98%", category:"Caterer", subcategory:"Bakers", image:"img/service-2.jpg"}	
  ];

});
