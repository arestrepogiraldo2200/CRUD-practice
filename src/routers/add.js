
const express = require('express');
let router = express.Router();
const add = require('../controllers/addController');

router.get('/add', add.addform);
router.post('/add', add.addanimal);

module.exports = router;