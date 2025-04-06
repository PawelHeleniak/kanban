const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

const usersRouter = require("./routes/users");

app.use(cors());
app.use(express.json());

app.use("/auth", usersRouter);

app.listen(PORT, () => {
  console.log(`Server działa na http://localhost:${PORT}`);
});
