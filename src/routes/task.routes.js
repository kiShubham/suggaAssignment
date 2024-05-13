const router = require("express").Router();

const taskController = require("../controllers/task.controller");

router.post("/", taskController.createTask);
router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTasksbyId);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
