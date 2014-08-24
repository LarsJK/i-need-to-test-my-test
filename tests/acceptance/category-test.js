import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Category', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /categories/#', function() {
  visit('/categories/1');

  andThen(function() {
    equal(currentPath(), 'categories.category.subcategories.index');
  });
});

test('renders products', function () {
  visit('/categories/2/products');

  andThen(function () {
    var list = find('#product-list li');
    equal(list.length, 2);

    var first = find('#product-list li').eq(0);
    equal(first.text(), 'A4');

    var last = find('#product-list li').eq(1);
    equal(last.text(), 'A3');
  });
});