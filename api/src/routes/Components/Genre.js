const express = require('express')
const router = express.Router();// buscar que es Router

router.get('/', (req, res) => {
    res.send('hola bro')
})






module.exports = router