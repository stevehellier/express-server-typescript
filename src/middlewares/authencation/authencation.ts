import { Response, Request, NextFunction } from 'express';

const authentication = (req: Request, res: Response, next: NextFunction) => {
  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64')
    .toString()
    .split(':');

  if (!login || !password) {
    const error = Error('not authed');
    res.status(401);
    res.set('WWW-Authenticate', 'Basic realm="401"');
    return next(error);
  }

  return next();
};

export default authentication;
