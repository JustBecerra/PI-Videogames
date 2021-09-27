const express = require('express')
const router = express.Router();// buscar que es Router
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();
const {YOUR_API_KEY} = process.env

router.get('/', async (req, res) => {
    try{
      const response = await fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`);
      const data = await response.json();
    //   return res.json(data.results)
      //mapeo para devolver los datos necesarios
      arrData = data.results.map(({name, id, released, rating, platforms}) => ({
        name,
        id,
        released,
        rating,
        platforms
      }));

      //si recibo nombre por query
      if(req.query.name){
        arrVideoG = arrData.filter(VG => VG.name.includes(req.query.name))
        arrVideoG.length = 15;
        return res.json(arrVideoG)
      }
      if(arrVideoG.length === 0 && !arrData.length){
        return res.status(404).send(`no se encontro un video juego que contenga ${req.query.name} en su nombre`)
      }
      
      return res.json(arrData)
    }catch(err){
       res.send(err)
    }
})

router.get('/:idVideoGame', (req, res) => {
    
})




module.exports = router
