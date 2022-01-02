const express = require("express");

const StudentController = require("../controller/StudentController.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hi");
});

router.get("/student", StudentController.index);
router.post("/student", StudentController.store);
router.put("/student/:id", StudentController.update);
router.delete("/student/:id", StudentController.destroy);

module.exports = router;