
var express = require('express');
const router = express.Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const router = Router();
const RouterGenre = require('./Components/Genre')
const RouterVideogame = require('./Components/Videogame')
router.use('/videogames', RouterVideogame)
router.use('/Genre', RouterGenre)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
