const express = require('express');
const router = express.Router();

const troController = require('../app/controllers/TroController');

// newsController.index;
router.get('/:slug', troController.show);



module.exports = router;