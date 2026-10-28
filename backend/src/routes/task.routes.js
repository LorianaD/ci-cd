import { Router } from "express";
import createTask from "../controllers/tasks/createTask.controller.js";
import getAllTasks from "../controllers/tasks/getAllTasks.controller.js";
import updateTask from "../controllers/tasks/updateTask.controller.js";
import deleteTask from "../controllers/tasks/deleteTask.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import getOneTask from "../controllers/tasks/getOneTask.controller.js";

const router = Router();

// POST : CREATE
router.post("/", authMiddleware, createTask);

// GET : READ
router.get("/", authMiddleware, getAllTasks);
router.get("/{id}", authMiddleware, getOneTask);

// PUT : UPDATE
router.put("/", authMiddleware, updateTask);

// DELETE : DELETE
router.delete("/", authMiddleware, deleteTask);

export default router;