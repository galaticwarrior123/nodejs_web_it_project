const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');
// troController.show;
router.get('/:slug', loginController.login);





module.exports = router;