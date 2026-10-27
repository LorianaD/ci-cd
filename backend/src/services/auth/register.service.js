import bcrypt from 'bcrypt';
import pool from '../../db/db.js';

async function register({ username, email, password }) {
    
    if ( !username || !email || !password ) {
        const error = new Error('Pseudo, e-mail, mot de passe sont obligatoire');
        error.status = 400;
        throw error;
    };

    const [existingUser] = await pool.execute(
        "SELECT id FROM users WHERE email = ?",
        [email]
    );

    if (existingUser.length > 0) {
        const error = new Error("Email déjà utilisé");
        error.status = 409;
        throw error;
    };

    const hash = await bcrypt.hash(password, 10);
    
    const query = `
        INSERT INTO users (username, email, password)
        VALUES (?, ?, ?)
    `;

    const [result] = await pool.execute(query, [username, email, hash]);

    return {
        id: result.insertId,
        username,
        email,
        created_at: new Date()
    }

}

export default register