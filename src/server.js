const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/task.routes");

// connection to mongoose
const mongodbURI =
  "mongodb+srv://newUser:newUser@cluster0.kitzd9m.mongodb.net/?retryWrites=true&w=majority&appName=SuggaTaskManager";
mongoose
  .connect(mongodbURI)
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
