import { Response, Request, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  const { headers, url, baseUrl, method } = req;
  const log = {
    headers,
    url,
    baseUrl,
    method,
  };
  console.log(log);
  return next();
};

export default logger;
