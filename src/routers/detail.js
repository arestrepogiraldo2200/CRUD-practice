
const express = require('express');
let router = express.Router()
const detail = require('../controllers/detailController')

router.get('/detail/:id', detail.detail);
router.delete('/detail/:id/delete', detail.delete);


module.exports = router;