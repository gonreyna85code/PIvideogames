const { Router } = require("express");
require("dotenv").config();
const { Videogames } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
    const game = req.body;
    if (game.name === '') return res.status(505).send('Debe tener un nombre');
    await Videogames.create(game).catch (error => { res.status(500).send(error.parent.detail)})
    var todos = await Videogames.findAll();
    res.json(todos);
  
  });
  
 
  
  module.exports = router;