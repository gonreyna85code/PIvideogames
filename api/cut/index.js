const { Router } = require("express");
const fetch = require("node-fetch");
require("dotenv").config();
const { API } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Videogames, Generos } = require("../src/db");

const router = Router();

router.post("/videogame", async (req, res) => {
  const game = req.body;
  if (game.name === '') return res.status(505).send('Debe tener un nombre');
  await Videogames.create(game).catch (error => { res.status(500).send(error.parent.detail)})
  var todos = await Videogames.findAll();
  res.json(todos);

});
router.get("/videogames", async (req, res) => {
  if (req.query) {
    const param = req.query;
    let name = param.search;
    var games = await fetch(
      `https://api.rawg.io/api/games?search=${name}&key=${API}`
    ).then((response) => response.json());
    res.json(games.results.splice(0, 15));
  }
});
router.get("/videogame/:id", async (req, res) => {
  let id = req.params.id;
  var game = await fetch(`https://api.rawg.io/api/games/${id}?key=${API}`).then(
    (res) => res.json()
  );
  res.json(game);
});
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

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
