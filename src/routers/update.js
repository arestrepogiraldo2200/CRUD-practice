
const express = require('express');
const router = express.Router();
const update = require('../controllers/updateController');

router.get('/update/:id', update.update);
router.put('/update/:id', update.overwrite);

module.exports = router;