var express = require('express'),
    router  = new express.Router();

// Require controllers.
var usersCtrl = require('../controllers/users');
var mealsCtrl = require('../controllers/meals');

// Require token authentication.
var token = require('../config/token_auth');

// users resource paths:
router.post('/users',    usersCtrl.create);
router.get( '/users/me', token.authenticate, usersCtrl.me);
router.put('/users/me/meals/:mealId',  token.authenticate, usersCtrl.update)
router.delete('/users/me/meals/:mealId',  token.authenticate, usersCtrl.destroy)


router.post('/token',    token.create);

// meals resource paths:
router.get('/meals', mealsCtrl.index);
router.post('/meals', mealsCtrl.create);

// individual meal paths
router.get('/meals/:id', mealsCtrl.show);
router.put('/meals/:id', mealsCtrl.update);
router.delete('/meals/:id', mealsCtrl.destroy);




module.exports = router;
