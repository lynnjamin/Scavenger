const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
  game: [
    {
      clue: { type: String, required: true },
      code: { type: String, required: true }
    }
  ],
  date: { type: Date, default: Date.now },
  createdBy: { type: String, required: true },
  nickname: { type: String, required: true }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
