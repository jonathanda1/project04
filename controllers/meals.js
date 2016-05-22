var Meal = require('../models/meal');

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}

// Show all Meals
function index(req, res, next) {
  Meal.find({}, function(err, meals) {
    if (err) next(err);
    res.json(meals);
  });
}

// Show one Meal
function show(req, res, next) {
  var id = req.params.id;

  Meal.findById(id, function(err, meal) {
    if (err) next(err);
    res.json(meal);
  });
}

// Create new Meal
function create(req, res, next) {
  console.log(req.body)
  var newMeal = new Meal(req.body);
  newMeal.save(function(err, savedMeal) {
    if (err) next(err);
    res.json(savedMeal);
  });

}

// Update existing Meal
function update(req, res, next) {
  var id = req.params.id;

  Meal.findById(id, function(err, meal) {
    if (err) next(err);
    meal.title = req.body.title;
    meal.body = req.body.body;
    meal.cals = req.body.cals;
    meal.protein = req.body.protein;
    meal.fats = req.body.fats;
    meal.carbs = req.body.carbs;

    meal.save(function(err, updatedMeal) {
      if (err) next(err);
      res.json(updatedMeal);
    });
  });
}

// Deleting a Meal
function destroy(req, res, next) {
  var id = req.params.id;

  Meal.remove({_id:id}, function(err) {
    if (err) next(err);
    res.json({message: 'Meal successfully deleted'});
  });
}
