import DS from 'ember-data';

var Subcategory = DS.Model.extend({
  name: DS.attr('string'),
  option: DS.belongsTo('category'),
  products: DS.hasMany('product', {
  	async: true
  })
});

Subcategory.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Neon',
			option: 1,
			products: [1]
		},
		{
			id: 2,
			name: 'Pastel',
			option: 1,
			products: [2]
		}
	]
});

export default Subcategory;