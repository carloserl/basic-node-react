const express = require('express');
const router = express.Router();

const controller = require('../controllers/hello.controller');

router.get('/hello', controller.hello);

module.exports = router;