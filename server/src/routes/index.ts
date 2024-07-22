import { Router } from 'express';
import { getLatestData } from '../controllers/dataController';

const router = Router();

router.get('/data', getLatestData);

export default router;
