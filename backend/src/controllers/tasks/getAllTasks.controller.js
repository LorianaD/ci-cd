import { getAllTasksService } from "../../services/index.js";

async function getAllTasks(req, res, next) {
    try {
        const userId = req.user.sub;
        const tasks = await getAllTasksService(userId);

        return res.status(200).json({
            success: true,
            message: "Tasks retrieved successfully",
            data: tasks
        });
    } catch (error) {
        next(error);
    }
}

export default getAllTasks;
