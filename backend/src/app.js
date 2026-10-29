import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routes/index.js";
import { errorMiddleware } from "./middlewares/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", router);

// Centralized error handling
app.use(errorMiddleware);

export default app;