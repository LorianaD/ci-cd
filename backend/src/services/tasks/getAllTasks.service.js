import { getAllTaskModel } from "../../models/index.js";

async function getAllTasksService(userId) {
    const tasks = await getAllTaskModel(userId);
    return tasks;
}

export default getAllTasksService;