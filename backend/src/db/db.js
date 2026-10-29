import "dotenv/config";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function checkDatabaseConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("Connexion MySQL OK");
        connection.release();
    } catch (error) {
        console.error("Erreur connexion MySQL :", error.message);
    }
}

export default pool;