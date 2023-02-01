
const express = require('express');
let router = express.Router()
const detail = require('../controllers/detailController')

router.get('/detail/:id', detail.detail);

module.exports = router;