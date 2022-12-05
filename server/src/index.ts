import express from 'express';
import config from 'config'
import connect from "./Utils/connect"
import logger from "./Utils/logger"
import routes from "./routes"
import deserializedUser from './middleware/deserializedUser'

(async () => {

    await connect()

    const port = config.get("port") as number;
    const host = config.get("host") as string;

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(deserializedUser);
    routes(app);
    app.listen(port, host, async () => {
        logger.info(`Server listening at http://${host}:${port}`)
    });

})()