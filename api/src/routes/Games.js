const { Router } = require("express");
const fetch = require("node-fetch");
const { Videogames } = require("../db");
require("dotenv").config();
const { API } = process.env;

const router = Router();

router.get("/game", async (req, res) => {
    const name = req.query.search.split(' ').filter(e => e !== '')
    let gamesdb = await Videogames.findAll();  
    var regex = new RegExp(name, 'ig')
    var lista = gamesdb.filter((d) => d.name.match(regex))
    var games = await fetch(`https://api.rawg.io/api/games?search=${name}&key=${API}`)
      .then((response) => response.json())
      .catch((error) => {
        return res.status(404).send("Invalid");
      });
      
    res.json(lista.concat(games.results))
  });
  
  module.exports = router;