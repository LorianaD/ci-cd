import { createTaskModel } from "../../models/index.js";

async function createTaskService(data) {
    return await createTaskModel(data);
}

export default createTaskService;