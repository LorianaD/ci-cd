import { getByIdModel } from "../../models/index.js";

async function getOneTaskService(userId) {
    const tasks = await getByIdModel(userId);
    return tasks;
}

export default getOneTaskService;