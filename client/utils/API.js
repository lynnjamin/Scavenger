import axios from "axios";

// this is where we need to make the calls to our express functions from server.js
export default {
  // Gets all games
  getGame: function() {
    return axios.get("/api/games");
  },
};