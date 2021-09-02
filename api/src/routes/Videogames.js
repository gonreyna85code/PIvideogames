const { Router } = require("express");
const fetch = require("node-fetch");
require("dotenv").config();
const { API } = process.env;

const router = Router();

router.get("/", async (req, res) => {
    if (req.query) {
      const param = req.query;
      let name = param.search;
      var games = await fetch(
        `https://api.rawg.io/api/games?search=${name}&key=${API}`
      ).then((response) => response.json());
      res.json(games.results.splice(0, 15));
    }
  });
  
 
  
  module.exports = router;