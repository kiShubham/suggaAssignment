const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/task.routes");

// connection to mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/SuggaTaskManager")
  .then(() => {
    console.log("connected to DataBase😀");
  })
  .catch((err) => console.log("facing error on connecting DataBase😴", err));

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Sugga TaskManager is running");
});

app.use("/api/tasks", taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server is running");
});
