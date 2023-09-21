import Express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Boom from '@hapi/boom';
import { startConnection } from './src/mongo/index.mjs';
import filterRouter from './src/handlers/filters/index.mjs';
import { PORT } from './src/commons/env.mjs';

dotenv.config();

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/status', (req, res) => {
  res.send('su estatus es...');
});

app.use('/images', filterRouter);

app.use((err, _, res, next) => {
  if (err) {
    const error = Boom.isBoom(err) ? err : Boom.internal(err);
    const { statusCode } = error.output;
    const { payload } = error.output;
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
  // eslint-disable-next-line no-console
  console.log(`url: http://localhost:${PORT}`);
});
