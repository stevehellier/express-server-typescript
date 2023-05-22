import { Response, Request, RequestHandler } from 'express';
import getRndNumber from '../../helpers/numbers';

interface Weather {
  dateFormated: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
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

const getWeather: RequestHandler = (req: Request, res: Response) => {
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
  return res.json(weather);
};

export default getWeather;
