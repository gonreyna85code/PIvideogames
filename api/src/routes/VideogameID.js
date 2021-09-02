const { Router } = require("express");
const fetch = require("node-fetch");
require("dotenv").config();
const { API } = process.env;
const { Videogames } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
    let id = req.params.id;
    var game = await fetch(`https://api.rawg.io/api/games/${id}?key=${API}`).then(
      (res) => res.json()
    );
    res.json(game);
  });
  
 
  
  module.exports = router;