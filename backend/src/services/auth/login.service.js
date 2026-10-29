import pool from "../../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function loginService(email, password) {
    if (!email || !password) {
        const error = new Error("Email et mot de passe requis");
        error.status = 400;
        throw error;
    }

    const [users] = await pool.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );

    const user = users[0];

    if (!user) {
        const error = new Error("Identifiants incorrects");
        error.status = 401;
        throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        const error = new Error("Identifiants incorrects");
        error.status = 401;
        throw error;
    }

    const token = jwt.sign(
        { sub: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    return {
        token
    };
}

export default loginService;