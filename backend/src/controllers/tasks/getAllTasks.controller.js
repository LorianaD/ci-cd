import getAllTasksService from "../../services/tasks/getAllTasks.service.js";

async function getAllTasks(req, res) {
    console.log("getAllTasks controller OK");
    try {
        const userId = req.user.sub;
        const tasks = await getAllTasksService(userId);
        res.status(200).json({
            succes: true,
            message: "Récupération des taches reussit",
            data: tasks
        })
    } catch (error) {
        res.status(500).json({
            succes: false,
            error: error.message
        })
    }
}

export default getAllTasks