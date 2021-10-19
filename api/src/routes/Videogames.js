const { Router } = require("express");
const { Videogames } = require("../db");
const fetch = require("node-fetch");
require("dotenv").config();
const { API } = process.env;


const router = Router();

router.get("/videogames", async (_req, res) => {
    let gamesdb = await Videogames.findAll();
    let apiGames = await fetch(`https://api.rawg.io/api/games?key=${API}&page_size=100`)
    .then((response) => response.json());
     let games = await gamesdb.concat(apiGames.results); 
    res.send(games);
});
  
module.exports = router