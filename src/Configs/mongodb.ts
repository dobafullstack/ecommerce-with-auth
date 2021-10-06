import mongoose from "mongoose";
import Logger from "./logger";

const connect = () => {
    const url: string = process.env.MONGODB_URL || "";

    mongoose
        .connect(url, {})
        .then(() => {
            Logger.success("DB is connected");
        })
        .catch((err) => Logger.error(err.message));
};

export default connect;
