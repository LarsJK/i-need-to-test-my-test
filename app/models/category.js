import DS from 'ember-data';

var Category = DS.Model.extend({
  name: DS.attr('string'),
  subcategories: DS.hasMany('subcategory', {
  	async: true
  }),
  products: DS.hasMany('product', {
  	async: true
  })
});

Category.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Paint',
			subcategories: [1, 2],
			products: [1, 2]
		},
		{
			id: 2,
			name: 'Paper',
			subcategories: [],
			products: [3, 4]
		}
	]
});

export default Category;