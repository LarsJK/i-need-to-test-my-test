import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RouteTestProblemENV.locationType
});

Router.map(function() {
  this.resource('categories', function () {
  	this.resource('category', { path: ':category_id' }, function () {
	  this.resource('category.subcategories', { path: 'subcategories' }, function () {
	  	this.resource('subcategory', { path: ':subcategory_id' });
	  });
	  this.resource('category.products', { path: 'products' });
  	});
  });
});

export default Router;
