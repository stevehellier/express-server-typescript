import { Router } from 'express';

// Import middlewares
// import { authentication } from '../middlewares';

// Import Weather enpoint
import getWeather from './weather';

const router = Router();

router.get('/weather', getWeather);

export default router;
