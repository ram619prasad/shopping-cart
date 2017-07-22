var Product = require('../models/product');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;
mongoose.connect('mongodb://localhost/shopping_dev', {useMongoClient: true})


var products = [
  new Product({
    imagePath: 'https://i.ytimg.com/vi/-m6UKS1L0YQ/maxresdefault.jpg',
    title: 'Avengers Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
    price: 10
  }),
  new Product({
    imagePath: 'https://i.ytimg.com/vi/-m6UKS1L0YQ/maxresdefault.jpg',
    title: 'Avengers Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
    price: 10
  }),
  new Product({
    imagePath: 'https://i.ytimg.com/vi/-m6UKS1L0YQ/maxresdefault.jpg',
    title: 'Avengers Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
    price: 10
  }),
  new Product({
    imagePath: 'https://i.ytimg.com/vi/-m6UKS1L0YQ/maxresdefault.jpg',
    title: 'Avengers Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
    price: 10
  }),
  new Product({
    imagePath: 'https://i.ytimg.com/vi/-m6UKS1L0YQ/maxresdefault.jpg',
    title: 'Avengers Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
    price: 10
  }),
  new Product({
    imagePath: 'https://i.ytimg.com/vi/-m6UKS1L0YQ/maxresdefault.jpg',
    title: 'Avengers Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
    price: 10
  })
]

var done = 0;
for(var i=0; i<products.length; i++) {
  products[i].save((err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Product Saved!');
		}
    done++;
    if(done === products.length) {
      disconnectMongoose();
    }
  });
}

var disconnectMongoose = () => {
  mongoose.disconnect();
}
