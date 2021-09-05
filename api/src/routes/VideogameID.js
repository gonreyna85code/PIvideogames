const { Router } = require("express");
const fetch = require("node-fetch");
require("dotenv").config();
const { API } = process.env;

const router = Router();

router.get("/videogame/:idGame", async (req, res) => {
  if (isNaN(req.params.idGame)) {
    return res.status(404).send("ID invalida");
  }
  let id = parseInt(req.params.idGame);
  var game = await fetch(`https://api.rawg.io/api/games/${id}?key=${API}`)
    .then((response) => response.json())
    .catch((error) => {
      return res.status(404).send("ID invalida");
    });
  res.json(game);
});

module.exports = router;
