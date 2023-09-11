import {Router} from 'express';

const router = Router();

router.post('/', (req, res) => {
    res.send('Hello World! POST');
});

router.get('/', (req, res) => {
    res.send('Hello World! GET');
});

export default router;