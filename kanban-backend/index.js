const express = require("express");
const cors = require("cors");
require("dotenv").config();

const EventEmitter = require("events");
EventEmitter.defaultMaxListeners = 20;

const app = express();
const PORT = process.env.PORT || 3000;

const usersRouter = require("./routes/users");
const mailRouter = require("./routes/mail");

app.use(cors());
app.use(express.json());

app.use("/auth", usersRouter);
app.use("/mail", mailRouter);

app.listen(PORT, () => {
  console.log(`Server działa na http://localhost:${PORT}`);
});
