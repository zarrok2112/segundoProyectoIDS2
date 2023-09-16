import Express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { startConnection } from "./src/mongo/index.mjs";
import filterRouter from "./src/handlers/filters/index.mjs";
import Boom from "@hapi/boom";
import {PORT} from "./src/commons/env.mjs";

//configuracion del Env
dotenv.config();

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/images', filterRouter);

app.use((err, _, res, next) => {
    if (err) {
        let error = Boom.isBoom(err) ? err : Boom.internal(err);
        const statusCode = error.output.statusCode;
        const payload = error.output.payload;
        return res.status(statusCode).json(payload);
    }

    return next;
});

(async () => {
    try {
        await startConnection();
    } catch (e) {
        console.log(e);
    }
})();

app.listen(process.env.PORT, () => {
    console.log(`url: http://localhost:${PORT}`);
});