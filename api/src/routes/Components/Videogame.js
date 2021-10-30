const express = require('express')
const router = express.Router();// buscar que es Router
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();
const {Op} = require('sequelize')
const {YOUR_API_KEY} = process.env
const {Videogame, Genre} = require('../../db')

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try{
      //si recibo un UUID que tiene 36 caracteres
      if(id.length >= 36){
        const localID = await Videogame.findOne({
          where: {id: {[Op.eq]: id}},
          include: {model:Genre}
        })
        if(localID){
          return res.json(localID)
        }
      }else if(id.length < 36){ 
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
        const data = await response.json();
        let Juego = {
          name: data.name,
          id: data.id,
          background_image: data.background_image,
          description: data.description_raw,
          released: data.released,
          rating: data.rating,
          platforms: data.platforms,
          genres: data.genres
        }
      
        if(Juego){
          return res.json(Juego)
        }
    }else{
      res.status(404).send("Dicho videojuego no esta disponible")
    }
    }catch(err){
      return res.send(err)
    }
})

router.post('/', async (req, res) => {
  const {name, description, Released, Rating, Platforms, genres} = req.body
  try{
    const newVG = await Videogame.create({
      name: name,
      description: description,
      Released: Released,
      Rating: Rating,
      Platforms: Platforms,
    })

    //encuentro un genero
    if(genres){
    const localG = await Genre.findAll({
      where: {name: genres}
    })
    
    newVG.addGenre(localG)
    }
    
    return res.json(newVG)
  }catch(err){
    res.status(404).send(err.message)
  }
})



module.exports = router
