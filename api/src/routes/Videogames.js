const { Router } = require("express");
const { Videogames } = require("../db");
require("dotenv").config();


const router = Router();

router.get("/videogames", async (_req, res) => {
    games = await Videogames.findAll()
    res.send(games);
    }
  );
  
 
  
  module.exports = router;