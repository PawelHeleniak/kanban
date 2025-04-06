const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
} = require("../controllers/usersController");

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);

module.exports = router;
