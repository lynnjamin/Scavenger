const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/scavengergame"
);

const gameSeed = [
  {  
    "title" : "Find the treasure!",
    "nickname": "Testy McTestface",
    "date" : new Date(Date.now()),
    "game": [
      {
        clue: "Like Amazon, but free!",
        code: {
          text: "Library",
          lat:30.265877,
          lng:-97.751780
        }
      },
      {
        clue: "half river, half swimming pool",
        code: {
          text: "Barton Springs",
          lat:30.264005, 
          lng:-97.771028
        }
      }]
  },
  {  
    "title" : "Test the code in class!",
    "nickname": "Testy McTestface",
    "date" : new Date(Date.now()),
    "game": [
      {
        clue: "The place you love to hate!",
        code: {
          text: "classroom",
          lat:30.28229959,
          lng:-97.7363127
        }
      },
      {
        clue: "Like Amazon, but free!",
        code: {
          text: "Library",
          lat: 30.265936,
          lng: -97.751717
        }
      }]
  },
  {
    "title": "Find my other sock!",
    "nickname": "Testy McTestface",
    "date" : new Date(Date.now()),
    "game": [
      {
        clue: "They say it's where you lay your head",
        code: {
          text: "Home",
          lat: 30.21215,
          lng:-97.83238
        }
      },
      {
        clue: "half river, half swimming pool",
        code: {
          text: "Barton Springs",
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
