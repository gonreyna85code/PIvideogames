const Router = require("express");
const { Videogames } = require("../db");
const axios = require("axios").default;
require("dotenv").config();
const { API } = process.env;

const router = Router();

router.get("/videogames", async (_req, res) => {
  var lista = [];
    let gamesdb = await Videogames.findAll();
  for(let i = 1; i < 4; i++) {      
  let apiGames = await axios
    .get(`https://api.rawg.io/api/games?page=${i}&page_size=35&key=${API}`)
    .catch((error) => {
      return res.status(500).send(error);
    });
    lista = await lista.concat(gamesdb.concat(apiGames.data.results));} 
  res.send(lista);
});

module.exports = router;
