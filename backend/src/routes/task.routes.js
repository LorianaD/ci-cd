import { Router } from "express";
import createTask from "../controllers/tasks/createTask.controller.js";
import getAllTasks from "../controllers/tasks/getAllTasks.controller.js";
import updateTask from "../controllers/tasks/updateTask.controller.js";
import deleteTask from "../controllers/tasks/deleteTask.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getAllTasks);
router.put("/", authMiddleware, updateTask);
router.delete("/", authMiddleware, deleteTask);

export default router;