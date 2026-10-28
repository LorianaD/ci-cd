import { getOneTaskService } from "../../services/index.js";

async function getOneTask(req, res) {
    console.log("getOneTask controller OK");
    try {
        const userId = req.user.sub;
        const task = await getOneTaskService(userId);

        res.status(200).json({
            succes: true,
            message: "Récupération d'une tache reussit",
            data: task
        })
    } catch (error) {
        res.status(500).json({
            succes: false,
            error: error.message
        })
    }
}

export default getOneTask