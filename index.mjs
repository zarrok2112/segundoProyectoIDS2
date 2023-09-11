import Express  from "express";
import bodyParser from "body-parser";
import {startConnection} from "./src/mongo/index.mjs";
import filterRouter from "./src/handlers/filters/index.mjs";

const app = Express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/images', filterRouter);


const PORT = 3000;
const startServer = async () => {
    await startConnection();
    app.listen(PORT, () => {
        console.log('http://localhost:' + PORT);
    });
}

startServer();