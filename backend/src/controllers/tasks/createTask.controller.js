import createTaskService from "../../services/tasks/createTask.service.js";

async function createTask(req, res) {
    console.log("createTask controller OK");
    try {
        console.log("try in create controller OK");
        console.log("req.user :", req.user);
        const { title, description, status } = req.body;
        const userId = req.user.sub;
        console.log("req.user :", req.user);
        console.log("userId :", userId);
        const task = await createTaskService({
            title,
            description,
            status,
            userId
        });
        res.status(201).json({
            success: true,
            message: "Ajout d'une tache reussit",
            data: task
        });
    } catch (error) {
        res.status(500).json({
            succes : false,
            error: error.message
        })
    }
}

export default createTask