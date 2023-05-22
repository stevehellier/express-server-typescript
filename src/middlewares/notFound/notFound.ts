/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response, RequestHandler } from 'express';

const notFound: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new Error(`Not found -  ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export default notFound;
