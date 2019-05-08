const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  game: [
    {clue: { type: String, required: true }},
    {code: { type: String, required: true }}

  ],

});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
