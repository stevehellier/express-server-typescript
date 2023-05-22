import fs from 'fs';
import path from 'path';

const FILENAME = process.env.ACCESS_LOG_FILE ?? 'access.log';

const basefolder = `${path.resolve(__dirname, '../..')}`;

const logPath = `${basefolder}/logs/`;

const setup = () => {
  if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath);
  }
};

const getAccessLogFileStream = () => {
  const accessLogStream = fs.createWriteStream(`${logPath}/${FILENAME}`, {
    flags: 'a',
  });
  return accessLogStream;
};

export default { setup, getAccessLogFileStream };
