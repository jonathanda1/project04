var mongoose = require('./database');

var User = require('../models/user');
var Meal = require('../models/meal');


var meals = [
    {
      title: "Chicken & Brocolli",
      body: "Grilled chicken with steamed brocolli and a side of rice",
      cals: 500,
      protein: 30,
      fats: 15,
      carbs: 45
    },
    {
      title: "Steak & String Beans",
      body: "Grilled steak with string beans and potatoes",
      cals: 550,
      protein: 35,
      fats: 20,
      carbs: 35
    }
]

  Meal.create(meals, function(err, meals) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + meals.length + " meals.");
      mongoose.connection.close();
    }
    process.exit();
  });


