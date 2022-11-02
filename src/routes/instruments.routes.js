import { Router } from 'express';
import { createInstrument, getInstruments } from '../controllers/instruments.controller.js';
const router = Router();

router.get('/instruments', getInstruments);
router.post('/instruments', createInstrument);

export default router;
