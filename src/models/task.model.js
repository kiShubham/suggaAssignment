const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: {
      type: String,
      enum: ["High", "Low", "Medium"],
      default: "Low",
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: false }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
