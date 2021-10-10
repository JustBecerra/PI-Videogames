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
      //busco un videojuego en la DB con el ID recibido por params
      if(id.length >= 36){
        console.log(id)
        const localID = await Videogame.findOne({
          where: {id: {[Op.eq]: id}},
          include: {model:Genre}
        })
        if(localID){
          return res.json(localID)
        }
      //si no recibo un UUID
      }else if(id.length < 36){ 
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
        const data = await response.json();
        //busco el juego en la API con el ID que recibo por params
        let Juego = {
          name: data.name,
          id: data.id,
          background_image: data.background_image,
          description: data.description,
          released: data.released,
          rating: data.rating,
          platforms: data.platforms,
          genres: data.genres
        }
      
        if(Juego){
          return res.json(Juego)
        }
    }else{
      res.status(404).send("Dicho detalle no esta disponible")
    }
    }catch(err){
      return res.send(err)
    }
})

router.post('/', async (req, res) => {
  const {name, description, Released, Rating, Platforms, genres} = req.body
  try{
    //creo un nuevo videojuego sin genres porque eso lo utilizo a la hora de encontrar un genero
    const newVG = await Videogame.create({
      name: name,
      description: description,
      Released: Released,
      Rating: Rating,
      Platforms: Platforms,
    })

    //encuentro un genero
    const localG = await Genre.findAll({
      where: {name: genres}
    })
    
    //hago la asociacion 
    newVG.addGenre(localG)
    
    return res.json(newVG)
  }catch(err){
    console.log(err.message)
    res.status(404).send(err.message)
  }
})



module.exports = router
