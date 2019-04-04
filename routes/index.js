const path = require('path');

var express = require('express');
var router = express.Router();

const app = new express();

app.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('front/index', { title: 'Express' });
});

// Admin Login 
router.get('/admin/login', function(req, res, next) {
  res.render('auth/admin_login', { title: 'Admin | Login' });
});
router.get('/admin/register', function(req, res, next) {
  res.render('auth/admin_register', { title: 'Admin | Register' });
});
router.get('/admin/forgot', function(req, res, next) {
  res.render('auth/admin_forgot_password', { title: 'Admin | Forgot' });
});


router.get('/admin', function(req, res, next) {
  res.sendFile(path.resolve('views/admin/index.html'));
});

module.exports = router;
