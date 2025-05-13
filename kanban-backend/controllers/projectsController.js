const db = require("../db");

const getAllProject = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM projects");
    res.status(201).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Wewnętrzny błąd serwera." });
  }
};
const createProject = async (req, res) => {
  const { name, description, created_by } = req.body;
  try {
    const checkExist = await db.query(
      "SELECT name FROM projects WHERE name = $1",
      [name]
    );
    if (checkExist.rows.length > 0 || !name)
      return res.status(400).json({
        message: !name
          ? "Wymagana jest nazwa projektu."
          : "Nazwa projektu powtarza się.",
      });

    const result = await db.query(
      "INSERT INTO projects (name, description, created_by) VALUES ($1, $2, $3) RETURNING *",
      [name, description, created_by]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Wewnętrzny błąd serwera." });
  }
};
const deleteProject = async (req, res) => {
  const projectId = req.params.id;
  try {
    const checkExist = await db.query("SELECT * FROM projects WHERE id = $1", [
      projectId,
    ]);
    console.log(projectId);

    if (checkExist.rows.length === 0 || !projectId)
      return res
        .status(400)
        .json({ message: "Nie znaleziono projektu o podanym ID." });

    const result = await db.query("DELETE FROM projects WHERE id = $1", [
      projectId,
    ]);
    res
      .status(201)
      .json(result.rows[0], { message: "Projekt został usunięty." });
  } catch (error) {
    res.status(500).json({ message: "Wewnętrzny błąd serwera." });
  }
};
module.exports = {
  getAllProject,
  createProject,
  deleteProject,
};
