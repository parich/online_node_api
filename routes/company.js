const express = require("express");
const companyController = require("../controllers/companyController");
const router = express.Router();

/* GET users listing. */
//http://localhost:3000/company/
router.get("/", companyController.index);

module.exports = router;
