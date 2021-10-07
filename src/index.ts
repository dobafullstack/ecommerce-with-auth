import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./Configs/mongodb";
import router from "./Routes/index.routes";
import Logger from './Configs/logger'
import authenticationMiddleware from './Middlewares/Authentication.middleware';

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authenticationMiddleware);

router(app);

app.listen(PORT, () => {
    Logger.success(`Server is running on http://localhost:${PORT}`);
});
