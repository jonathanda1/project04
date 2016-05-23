var mongoose = require('mongoose');

var mealSchema = mongoose.Schema({
  title: String,
  body: String,
  cals: Number,
  protein: Number,
  fats: Number,
  carbs: Number,
  users: [{type: Number, ref: 'User'}]
});

var Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal;
