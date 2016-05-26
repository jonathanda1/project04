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
      carbs: 45,
      day: "Monday"
    },
    {
      title: "Steak & String Beans",
      body: "Grilled steak with string beans and potatoes",
      cals: 550,
      protein: 35,
      fats: 20,
      carbs: 35,
      day: "Tuesday"
    },
    {
      title: "Salmon & Brocolli",
      body: "Baked salmon with steamed brocolli and a side of rice",
      cals: 450,
      protein: 28,
      fats: 20,
      carbs: 45,
      day: "Wednesday"
    },
    {
      title: "Frog & Brocolli",
      body: "Cooked frog with steamed brocolli and a side of rice",
      cals: 300,
      protein: 40,
      fats: 13,
      carbs: 50,
      day: "Thursday"
    },
    {
      title: "Subway",
      body: "A subway sandwich, also known as the GA diet",
      cals: 1000,
      protein: 20,
      fats: 30,
      carbs: 50,
      day: "Friday"
    },
    {
      title: "Eggs & Bacon",
      body: "Scrambled eggs and bacon",
      cals: 300,
      protein: 20,
      fats: 15,
      carbs: 20,
      day: "Saturday"
    },
    {
      title: "Pineapple Fried Rice",
      body: "Fried rice with Pineapple",
      cals: 700,
      protein: 25,
      fats: 20,
      carbs: 60,
      day: "Saturday"
    },
    {
      title: "Eggs & Bacon",
      body: "Scrambled eggs and bacon",
      cals: 300,
      protein: 20,
      fats: 15,
      carbs: 20,
      day: "Saturday"
    },
    {
      title: "McDonald's 2 Sausage Egg McMuffins",
      body: "You have to eat something unhealthy once in a while.",
      cals: 100,
      protein: 15,
      fats: 60,
      carbs: 90,
      day: "Sunday"
    },
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


