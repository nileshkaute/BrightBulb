const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/adminController");

router.post("/login", login);
router.post("/register", register); // Keep this to create the first admin easily

module.exports = router;
