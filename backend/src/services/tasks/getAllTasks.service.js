import taskModel from "../../models/tasks.model.js";

async function getAllTasksService(userId) {
    const tasks = await taskModel.getAllTaskModel(userId);
    return tasks;
}

export default getAllTasksService;