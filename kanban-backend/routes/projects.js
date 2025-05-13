const express = require("express");
const router = express.Router();
const {
  createProject,
  getAllProject,
  deleteProject,
} = require("../controllers/projectsController");

router.get("/", getAllProject);
router.post("/", createProject);
router.delete("/:id", deleteProject);

module.exports = router;
