import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT;

if (!PORT) {
    console.log("PORT absent veullez compléter le fichier .env");
    process.exit(1);
}

app.listen(PORT, ()=> {
    console.log(`server lancé sur ${PORT}`);
})