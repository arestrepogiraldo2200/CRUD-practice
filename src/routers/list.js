const express = require('express');
let router = express.Router();
const list = require('../controllers/listController');

router.get('/list', list.list);

module.exports = router;