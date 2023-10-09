const express = require('express');
const router = express.Router();

const detailController = require('../app/controllers/DetailController');

// newsController.index;
router.get('/show/:slug', detailController.show);
router.get('/:slug', detailController.show);



module.exports = router;