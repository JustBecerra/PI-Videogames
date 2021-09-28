const express = require('express')
const router = express.Router();// buscar que es Router
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();
const {YOUR_API_KEY} = process.env
const {Videogame} = require('../../db')

router.get('/', async (req, res) => {
    try{
      const response = await fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`);
      const data = await response.json();
      //filtro para devolver los datos necesarios
      arrData = data.results.map(({name, id, released, rating, platforms}) => ({
        name,
        id,
        released,
        rating,
        platforms
      }));
      let localVG = await Videogame.findAll()
      //si recibo nombre por query
      arrVideoG = arrData.filter(VG => VG.name.includes(req.query.name))
      arrLocalVG = localVG.filter(VG => VG.name.includes(req.query.name))

      if(arrData.some(elem => elem.name.includes(req.query.name))){
        if(arrVideoG.length >= 15){
          arrVideoG.length = 15;
        }else{
          let dif = 15 - arrVideoG.length
          arrLocalVG.length = dif
        }
        
       return res.json([...arrVideoG, ...arrLocalVG])
      }else if(req.query.name){
        return res.status(404).send('no se encontro un video juego que contenga esa palabra en su nombre')
      }
      return res.json([...arrData, ...localVG])
    }catch(err){
       return res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try{
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
      const data = await response.json();
      
      Juego = {
        name: data.name,
        id: data.id,
        background_image: data.background_image,
        description: data.description,
        released: data.released,
        rating: data.rating,
        platforms: data.platforms,
        genres: data.genres
      }
      const localID = await Videogame.findById(id)
      if(Juego){
        return res.json(Juego)
      }else if(!Juego){s
        return res.json(localID)
      }else{
        res.status(404).send("Dicho detalle no esta disponible")
      }
    }catch(err){
      return res.send(err)
    }
})





module.exports = router
