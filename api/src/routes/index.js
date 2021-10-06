
var express = require('express');
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const router = Router();
const RouterGenres = require('./Components/genres')
const RouterVideogame = require('./Components/Videogame')
const RouterVideogames = require('./Components/Videogames')
router.use('/videogame', RouterVideogame)
router.use('/genres', RouterGenres)
router.use('/videogames', RouterVideogames)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
