const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({  
  //We need to decide how we are going to represent the clues and codes in the schema

  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  // cluecode: [
  //   {clue : String }
  //   {code : String }]
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
