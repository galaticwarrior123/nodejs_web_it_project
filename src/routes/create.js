const express = require('express');
const router = express.Router();

const createController = require('../app/controllers/CreateController');
// troController.show;

router.get('/', createController.show);

module.exports = router;