var express = require('express');
var router = express.Router();
var studentController = require('../controllers/studentController');

/* GET main page. */
router.get('/', studentController.index);

/* Get all students */
router.get('/studentList', studentController.listStudents);

/* POST*/
router.post('/addStudent', studentController.addStudent);

module.exports = router;