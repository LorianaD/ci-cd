import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use('/api', router);

app.use((err, req, res, next) => {
    console.error(err);
    return res.status(500).json({
        error: "Erreur serveur",
        details: err.message
    });
});

export default app;