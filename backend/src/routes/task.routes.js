import { Router } from "express";

import createTask from "../controllers/tasks/createTask.controller.js";
import getAllTasks from "../controllers/tasks/getAllTasks.controller.js";
import getOneTask from "../controllers/tasks/getOneTask.controller.js";
import updateTask from "../controllers/tasks/updateTask.controller.js";
import deleteTask from "../controllers/tasks/deleteTask.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// All task routes require authentication
router.use(authMiddleware);

// CREATE
router.post("/", createTask);

// READ
router.get("/", getAllTasks);
router.get("/:id", getOneTask);

// UPDATE
router.put("/:id", updateTask);

// DELETE
router.delete("/:id", deleteTask);

export default router;