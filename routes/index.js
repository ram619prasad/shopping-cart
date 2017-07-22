var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf')

// CSRF Middleware
var csrfProtection = csrf({ cookie: true })
router.use(csrfProtection);

/* GET home page. */
router.get('/', (req, res, next) => {
  Product.find((err, docs) => {
    var chunkProducts = [];
    var chunkSize = 3;
    for(var i=0; i<docs.length; i+=chunkSize) {
      chunkProducts.push(docs.slice(i, i+chunkSize));
    }
    res.render('shop/index', { title: 'Ramp Store', products: chunkProducts });
  });
});

router.get('/user/sign_up', (req, res, next) => {
  res.render('user/sign-up', { csrfToken: req.csrfToken() });
});

router.post('/user/signup', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
