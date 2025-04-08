const express = require("express");
const router = express.Router();
const { sendTestEmail } = require("../controllers/mailController");

router.get("/", sendTestEmail);

module.exports = router;
