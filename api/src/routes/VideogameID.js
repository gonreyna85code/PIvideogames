const { Router } = require("express");
const fetch = require("node-fetch");
require("dotenv").config();
const { Videogames } = require("../db");
const { API } = process.env;

const router = Router();

router.get("/videogame/:id", async (req, res) => {
  const id = req.params.id;
  const DBgames = await Videogames.findAll();
  if(id.includes('db')){
    let ID = id.split('db');
    return res.send(DBgames.find(e => e.id === Number(ID[0])).dataValues);}  
  var game = await fetch(`https://api.rawg.io/api/games/${id}?key=${API}`)
    .then((response) => response.json())
    .catch((error) => {
      return res.status(404).send("ID invalida");
    });
  res.json(game);
});

module.exports = router;
