const express = require("express");
const staffController = require("../controllers/staffController");
const router = express.Router();

/* GET*/
//http://localhost:3000/staff/
router.get("/", staffController.index);

//GET by id
//http://localhost:3000/staff/63c0d80a67dfe51788ce1bc9
router.get("/:id", staffController.show);

/*Post*/
//http://localhost:3000/staff/
router.post("/", staffController.insert);

/*delecte*/
//http://localhost:3000/staff/
router.delete("/:id", staffController.delecte);

module.exports = router;
