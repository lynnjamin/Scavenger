const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({  
  //We need to decide how we are going to represent the clues and codes in the schema
  // cluecode: { type: [String], required: true },
  //author: {type: String, required: true},
  title: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Game", gameSchema);

module.exports = Game;
