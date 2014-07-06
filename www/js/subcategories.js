angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('SubCategories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var subcategories = [
    { id: 0, name: 'Artist' },
    { id: 1, name: 'Space' },
    { id: 2, name: 'Caterer' },
    { id: 3, name: 'Decorator' }
  ];

  return {
    all: function() {
      return subcategories;
    },
    get: function(subcategoryId) {
      // Simple index lookup
      return subcategories[subcategoryId];
    }
  }
});
