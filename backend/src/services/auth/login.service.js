import pool from "../../db/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function login(email, password) {

    if ( !email || !password ) {
        const error = new Error("Email et mot de passe requis");
        error.status = 400;
        throw error;
    };

    const [users] = await pool.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );

    const user = users[0];

    if (!user) {
        return {
            sucess: false,
            status: 401,
            error: "Utilisateur introuvable"
        }
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return {
            sucess: false,
            status: 401,
            error: "Mot de passe incorrect"
        }       
    }

    const token = jwt.sign(
        { 
            sub: user.id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    return {
        sucess: true,
        message: "Connexion réussie",
        token
    };
}

export default login;