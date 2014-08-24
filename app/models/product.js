import DS from 'ember-data';

var Product = DS.Model.extend({
  name: DS.attr('string'),
  subcategories: DS.hasMany('subcategory'),
  categories: DS.hasMany('category')
});

Product.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: '#39FF14',
			subcategories: [1],
			categories: [1]
		},
		{
			id: 2,
			name: '#77DD77',
			subcategories: [2],
			categories: [1]
		},
		{
			id: 3,
			name: 'A4',
			subcategories: [],
			categories: [2]
		},
		{
			id: 4,
			name: 'A3',
			subcategories: [],
			categories: [2]
		}
	]
});

export default Product;