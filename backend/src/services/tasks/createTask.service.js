import taskModel from "../../models/tasks.model.js";

async function createTaskService(data) {
    return await taskModel.createTaskModel(data);
}

export default createTaskService;