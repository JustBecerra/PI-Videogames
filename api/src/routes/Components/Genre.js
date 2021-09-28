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

      if(DBcargada.length === 0){
          arrGenres = data.results.map(({id,name}) => (
          Genre.create({id,name})
        ))

        await Promise.all(arrGenres)
        return res.json(await Genre.findAll())
      }else{
        return res.json(DBcargada)
      }
    }catch(err){
        res.send(err)
    }
})






module.exports = router