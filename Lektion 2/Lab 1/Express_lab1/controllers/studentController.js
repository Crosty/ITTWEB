//var Student = require('../models/student');
var Students = [];

// Main page
module.exports.index = function (req, res) {
    res.render('student.ejs', {title: "Teacher grading minions"});
};

// Get all students
module.exports.listStudents = (req, res) => {
    res.render('studentList.ejs', {Students: Students});
};

// Post a student
module.exports.addStudent = function (req, res, next) {
    var student = {
        name: req.body.name,
        grade:  req.body.grade
    };
    Students.push(student);
    console.log(Students);
    res.redirect('/studentList');
};

