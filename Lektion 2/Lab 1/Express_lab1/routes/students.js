var express = require('express');
var router = express.Router();
var studentController = require('../controllers/studentController');

/* GET home page. */
router.get('/', studentController.index);
module.exports = router;