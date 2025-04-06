const db = require("../db");

const getAllUsers = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd przy pobieraniu użytkowników");
  }
};

const getUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd przy pobieraniu użytkownika");
  }
};

const createUser = async (req, res) => {
  const { name, lastname, email, password } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO users (name, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, lastname, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd przy dodawaniu użytkownika");
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
};
