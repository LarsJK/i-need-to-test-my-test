import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.modelFor('category').get('subcategories');
	},
	afterModel: function (model) {
		if (model.get('length') === 0) {
			this.transitionTo('category.products');
		}
	}
});
