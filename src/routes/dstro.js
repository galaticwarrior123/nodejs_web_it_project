const express = require('express');
const router = express.Router();

const troController = require('../app/controllers/TroController');
// troController.show;
router.get('/:slug', troController.show);
router.get('/', troController.ret);




module.exports = router;