import { createTaskService } from "../../services/index.js";

async function createTask(req, res, next) {
    try {
        const { title, description, status } = req.body;
        const userId = req.user.sub;

        const task = await createTaskService({
            title,
            description,
            status,
            userId
        });

        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task
        });
    } catch (error) {
        next(error);
    }
}

export default createTask