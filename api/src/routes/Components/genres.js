const express = require('express')
const router = express.Router();// buscar que es Router
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();
const {YOUR_API_KEY} = process.env
const {Genre} = require('../../db')

router.get('/', async(req, res) => {
    try{
      const response = await fetch(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
      const data = await response.json()
      const DBcargada = await Genre.findAll();
      //traigo los generos
      if(DBcargada.length === 0){
          arrGenres = data.results.map(({id,name}) => (
          Genre.create({id,name})//creo promesas de creacion con sus propiedades si es que la BD no esta cargada
        ))
        //ejecuto las promesas al mismo tiempo con un promise.all
        await Promise.all(arrGenres)
        return res.json(await Genre.findAll())
      }else{//si la base de datos ya esta cargada, simplemente la retorno
        return res.json(DBcargada)
      }
    }catch(err){
      res.send(err)
    }
})






module.exports = router