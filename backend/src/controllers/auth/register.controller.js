import register from "../../services/auth/register.service.js";


async function registerController(req, res, next) {
    console.log("registerController OK");
    try {
        const user = await register(req.body)
        res.status(201).json({
            success: true,
            message: "Inscription reussite",
            data: user
        });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la création", error);
        next(error);
    }
}

export default registerController