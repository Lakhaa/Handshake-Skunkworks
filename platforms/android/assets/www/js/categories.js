angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = [
    { id: 0, name: 'Artist' },
    { id: 1, name: 'Space' },
    { id: 2, name: 'Caterer' },
    { id: 3, name: 'Decorator' }
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
