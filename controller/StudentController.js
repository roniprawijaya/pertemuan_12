const Student = require("../models/student.js");

class StudentController {
    async index(req, res) {
        const student = await Student.all();

        const response = {
            "message": "get all student",
            "data": student
        }

        res.json(response);
    }

    async store(req, res) {

        const studentId = await Student.create(req.body);
        const student = await Student.find(studentId);

        const response = {
            "message": "store student data",
            "data": student
        }

        res.json(response);
    }


    update(req, res) {

    }

    destroy(req, res) {

    }
}

const controller = new StudentController();
module.exports = controller;