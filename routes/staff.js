const express = require("express");
const staffController = require("../controllers/staffController");
const router = express.Router();

/* GET users listing. */
//http://localhost:3000/staff/
router.get("/", staffController.index);
router.post("/", staffController.insert);

module.exports = router;
