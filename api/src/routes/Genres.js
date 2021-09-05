const Router = require("express");
const fetch = require("node-fetch");
require("dotenv").config();
const { API } = process.env;
const { Generos } = require("../db");

const router = Router();

router.get("/generos", async (req, res) => {
    var check = await Generos.findAll()  
    if (check.length === 0){
      var gen = await fetch(`https://api.rawg.io/api/genres?key=${API}`)
      .then((response) => response.json());
      const nombre = gen.results.map((n) => n.name);
      for (let i = 0; i < nombre.length; i++) {
        let n = { name: nombre[i] };
        await Generos.create(n);
      }
    }
    var generos = await Generos.findAll();
    (res.json(generos));
  });
  
 
  
  module.exports = router;