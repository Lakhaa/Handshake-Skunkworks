angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = [
    { id: 0, name: 'Performance Artists' },
    { id: 1, name: 'Caterers' },
    { id: 2, name: 'Venue' },
    { id: 3, name: 'Photograpy' },
	{ id: 4, name: 'Decorators' },
	{ id: 5, name: 'Donations' }
  ];

  return {
    all: function() {
      return categories;
    },
    get: function(categoryId) {
      // Simple index lookup
      return categories[categoryId];
    }
  }
})

.factory('SubCategories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var subcategories = [
    { id: 0, name: 'Guitar' },
    { id: 1, name: 'Dance' },
    { id: 2, name: 'Mimcry' }
  ];

  return {
    all: function() {
      return categories;
    },
    get: function(categoryId) {
      // Simple index lookup
      return categories[categoryId];
    }
  }
});
