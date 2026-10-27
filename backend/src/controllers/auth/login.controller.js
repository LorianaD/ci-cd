import login from "../../services/auth/login.service.js";

async function loginController(req, res, next) {
    console.log("loginController OK");
    try {
        console.log("try in loginController OK");
        const { email, password } = req.body;
        const result = await login(email, password);
        res.status(200).json({
            succes: true,
            message: "Connexion réussie",
            data: {
                result
            }
        })
    } catch (error) {
        next(error);
    }
};

export default loginController;