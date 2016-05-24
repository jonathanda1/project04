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

var users = [
    {
      email: "dog@dog.com",
      name: "dog",
      meals: ["573e78eeda864f93dde81d0f", "574353f7d2811e22f9780d76", "574353f7d2811e22f9780d77"]
    }
]

  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length + " users.")
    }
  })

  Meal.create(meals, function(err, meals) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + meals.length + " meals.");
      mongoose.connection.close();
    }
    process.exit();
  });


