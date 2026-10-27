import dotenv from "dotenv";

dotenv.config();

const required = ["DB_HOST", "DB_USER", "DB_NAME", "DB_PORT", "JWT_SECRET"];
for (const key of required) {
    if (!process.env[key]) {
        throw new Error(key + "manquant dans le fichier .env");
    }
}

if (process.env.BD_PASSWORD === undefined) {
    throw new Error("BD_PASSWORD manquant dans le fichier .env");
}

const env = {
    port: Number(process.env.PORT ?? 4000),
    jwtSecret: process.env.JWT_SECRET,
    db: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT ?? 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME,
    },
};

export default env