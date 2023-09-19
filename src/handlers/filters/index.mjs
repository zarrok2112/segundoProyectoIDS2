import { Router } from 'express';
import applyFiltersHandler from './applyFiltersHandler.mjs';
import upload from '../utils/multerUtils.mjs';

const router = Router();


router.get('/', (_, res) => {
    res.send('aplicacion para filtros');
  });
  
  router.post('/', upload.array('images[]'), applyFiltersHandler);

export default router;