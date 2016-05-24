var User = require("../models/user");
var Meal = require("../models/meal");

module.exports = {
  create: create,
  me:     me,
  show: show,
  update: update
};

// User has many meals
function show(req,res,next) {
User.findById(req.params.id)
  .populate('meals')
  .exec(function(err,user) {
    if (err) res.json (err)
      res.json(user)
  })
}


// Updating user to include added meal
function update(req, res, next) {
  User.findById(req.params.id).then(function(meal) {
    meal.save(function(err, savedMeal) {
      if (err) console.log (err)
        User.findById(req.user._id, function(err,user) {
          user.meals.push(savedMeal)

          user.save(function(err, savedUser) {
            if (err) console.log (err)
              res.json(savedUser)
          })
        })
    })
  })
}

// function update(req, res, next) {
//   User.findOneAndUpdate {
//     {_id: req.params.id},
//     {$push: {meals: meal}},
//     {safe: true, upsert: true},
//     function(err,model){
//       console.log(err)
//     }
//   }
// }

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
    .findOne({email: req.decoded.email}).exec()
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
