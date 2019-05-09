const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactgamelist"
);

const gameSeed = [
  {  
    // cluecode: {
    //   [{clue: "Like Amazon, but free!",
    //     code: "The library"}]
    // }
    "title" : "Find the treasure!",
    "date" : new Date(Date.now())
    // "cluecode": [
    //   {
    //       "clues": "Like Amazon, but free!",
    //       "code": "Library"
    //   },
    //   {
    //     "clues": "half river, half swimming pool",
    //     "code": "Barton Springs"
    //   }
  },
  {
    "title": "Find my other sock!",
    "date" : new Date(Date.now())
    // "cluecode": [
    //   {
    //       "clues": "Like Amazon, but free!",
    //       "code": "Library"
    //   },
    //   {
    //     "clues": "half river, half swimming pool",
    //     "code": "Barton Springs"
    //   }
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
