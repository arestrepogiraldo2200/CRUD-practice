const express = require('express'); 
const main = require('../controllers/mainController')
let router = express.Router();

router.get('/', main.welcome)

module.exports = router;