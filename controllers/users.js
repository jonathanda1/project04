var User = require("../models/user");
var Meal = require("../models/meal");

module.exports = {
  create: create,
  me:     me,
  show: show,
  update: update,
  destroy: destroy
};

// User has many meals
function show(req,res,next) {
User.findOne({email: req.decoded.email})
  .populate('meals')
  .exec(function(err,user) {
    if (err) res.json (err)
      res.json({
        success: true,
        message: 'Successfully retrieved user data.',
        data: user
      })
  })
}


// Updating user to include added meal
function update(req, res, next) {
  User.findOne({email: req.decoded.email}).exec(function(err, user) {
    user.meals.push(req.params.mealId)

          user.save(function(err, savedUser) {
            if (err) console.log (err)
              res.json(savedUser)
          })
        })
}

// Deleting individual meal from user.meals
function destroy(req, res, next) {
  User.findOne({email: req.decoded.email}).exec(function(err,user) {
    if (err) console.log (err)
    var index = user.meals.indexOf(req.params.mealId)
    user.meals.splice(index,1)

    user.save(function(err,savedUser) {
      if (err) console.log (err)
        res.json(savedUser)
    })
  })
}

// Creating user via auth
function create(req, res, next) {
  if (!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  User
    .create(req.body)
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully created user.',
        data: {
          email: user.email,
          id:    user._id
        }
      });
    }).catch(function(err) {
      if (err.message.match(/E11000/)) {
        err.status = 409;
      } else {
        err.status = 422;
      }
      next(err);
    });
};

// Viewing user profile
function me(req, res, next) {
  User
    .findOne({email: req.decoded.email})
    .populate('meals')
    .exec()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully retrieved user data.',
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};
