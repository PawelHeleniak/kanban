const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  loginUser,
} = require("../controllers/usersController");

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);

router.post("/login", loginUser);

module.exports = router;
