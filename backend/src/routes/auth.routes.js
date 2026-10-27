import { Router } from "express";
import registerController from "../controllers/auth/register.controller.js";
import loginController from "../controllers/auth/login.controller.js";

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);

export default router;