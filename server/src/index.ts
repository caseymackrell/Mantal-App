import express from 'express';
import config from 'config'
import connect from "./Utils/connect"
import logger from "./Utils/logger"
import routes from "./routes"

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, async () => {
    logger.info(`Server listening at http://${host}:${port}`)

    await connect()

    routes(app)
});