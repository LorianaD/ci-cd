import { loginService } from "./../../services/index.js";

async function loginController(req, res, next) {
    try {
        const { email, password } = req.body;

        const result = await loginService(email, password);

        return res.status(200).json({
            success: true,
            message: "Connexion réussie",
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export default loginController;