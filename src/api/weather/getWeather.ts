import { Response, Request, RequestHandler, NextFunction } from 'express';
import getRndNumber from '../../helpers/numbers';

interface Weather {
  dateFormated: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface CachedWeather {
  weather: Array<Weather>;
  cachedTime: number;
}

const summaries = [
  'Freezing',
  'Bracing',
  'Chilly',
  'Cool',
  'Mild',
  'Warm',
  'Balmy',
  'Hot',
  'Sweltering',
  'Scorching',
];
const cachedData: CachedWeather = {
  weather: [],
  cachedTime: 0,
};
let cachedTime = 0;

const getWeather: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (cachedTime && cachedTime > Date.now() - 30 * 1000) {
    return res.json(cachedData);
  }

  try {
    const weather: Array<Weather> = [];

    for (let index = 0; index < 5; index += 1) {
      const tempC = Number(`${getRndNumber(-5, 20).toFixed(2)}`);
      const tempF = Number((32 + Number(tempC) / 0.556).toFixed(2));
      const date = new Date();
      date.setDate(date.getDate() + index);
      const item = {
        dateFormated: `${date.toLocaleDateString()}`,
        temperatureC: tempC,
        temperatureF: tempF,
        summary: `${
          summaries[Math.floor(Number(getRndNumber(0, summaries.length - 1)))]
        }`,
      };
      weather.push(item);
    }

    cachedTime = Date.now();

    cachedData.weather = weather;
    cachedData.cachedTime = cachedTime;

    return res.json(cachedData);
  } catch (error) {
    return next(error);
  }
};

export default getWeather;
