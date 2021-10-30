const express = require('express')
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();
const {YOUR_API_KEY} = process.env
const {Videogame, Genre} = require('../../db')

router.get('/', async (req, res) => {
    try{
      var arrInfo = []
      let next;
      for(var i = 0; i < 5; i++){
        if(i === 0){
          const response = await fetch(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`);
          var data = await response.json();
          next = data.next;
        }else{
          const response = await fetch(next);
          var data = await response.json();
          next = data.next;
        }
        arrInfo = arrInfo.concat(data.results)
      }
      
      
      
      arrData = arrInfo.map(({name, id, rating, genres, background_image}) => ({
        name,
        id,
        background_image,
        rating,
        genres
      }));
      

      
      let localVG = await Videogame.findAll({
        include: {model:Genre}
      })
            
      //si la propiedad nombre dentro de la API o DB incluye el name del query
      // if(arrData.some(elem => elem.name.includes(req.query.name)) || localVG.some(elem => elem.name.includes(req.query.name))){
      //   arrVideoVG = arrData.filter(VG => VG.name.includes(req.query.name))
      //   arrLocalVG = localVG.filter(VG => VG.name.includes(req.query.name))
      //   queryArray = [...arrLocalVG, ...arrVideoVG]
      //   if(queryArray.length > 15){
      //     queryArray.length = 15;
      //   }
       
      //  return res.status(200).json(queryArray)
      // }else 
      // if(req.query.name){
      //   return res.status(404).send('no se encontro un video juego que contenga esa palabra en su nombre')
      // }
      return res.status(200).json([...localVG, ...arrData])
    }catch(err){
       return res.send(err)
    }
})

module.exports = router