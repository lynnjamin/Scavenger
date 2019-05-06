import axios from "axios";

export default {
  // Gets all games
  getgames: function() {
    return axios.get("/api/games");
  },
  // Gets the game with the given id
  getgame: function(id) {
    return axios.get("/api/games/" + id);
  },
  // Deletes the game with the given id
  deletegame: function(id) {
    return axios.delete("/api/games/" + id);
  },
  // Saves a game to the database
  savegame: function(gameData) {
    return axios.post("/api/games", gameData);
  }
};
