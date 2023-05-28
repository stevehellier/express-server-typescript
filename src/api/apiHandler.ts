import { Router } from 'express';

// Import middlewares
import { authentication } from '../middlewares';

// Import enpoints
import getWeather from './weather';
import getTestAuth from './testAuth';

const router = Router();

router.get('/weather', getWeather);
router.get('/authtest', authentication, getTestAuth);

export default router;
