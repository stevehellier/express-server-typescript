import { Response, Request, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  const { headers, url, baseUrl } = req;
  const log = {
    headers,
    url,
    baseUrl,
  };
  console.log(log);
  return next();
};

export default logger;
