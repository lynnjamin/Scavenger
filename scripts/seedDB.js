const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/scavengergame"
);

const gameSeed = [
  {  
    "title" : "Find the treasure!",
    "date" : new Date(Date.now()),
    "cluecode": [
      {
        clue: "Like Amazon, but free!",
        code: {
          lat:30.265877,
          lng:-97.751780
        }
      },
      {
        clue: "half river, half swimming pool",
        code: {
          lat:30.264005, 
          lng:-97.771028
        }
      }]
  },
  {
    "title": "Find my other sock!",
    "date" : new Date(Date.now()),
    "cluecode": [
      {
        clue: "They say it's where you lay your head",
        code: {
          lat: 30.21215,
          lng:-97.83238
        }
      },
      {
        clue: "half river, half swimming pool",
        code: {
          lat:30.264005, 
          lng:-97.771028
        }
      }]
  }
];

db.Game
  .remove({})
  .then(() => db.Game.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
