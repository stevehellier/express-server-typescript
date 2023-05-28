import { Response, Request, RequestHandler, NextFunction } from 'express';

const getTestAuth: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json({ message: 'authed' });
};

export default getTestAuth;
