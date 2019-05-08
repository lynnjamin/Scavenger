const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
const gameSchema = new Schema({
  title: { type: String, required: true },
  game: [
    {clue: { type: String, required: true }},
    {code: { type: String, required: true }}
  ],
=======
const gameSchema = new Schema({  
  //We need to decide how we are going to represent the clues and codes in the schema
  // cluecode: { type: [String], required: true },
  //author: {type: String, required: true},
  title: { type: String, required: true },
>>>>>>> master
  date: { type: Date, default: Date.now }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
