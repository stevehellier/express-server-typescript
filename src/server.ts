// Standard imports
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

// Setup and configure swagger
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swagger/config';

// Import middlewares
import { notFound, errorHandler, authentication, logger } from './middlewares';
import apiHandler from './api/apiHandler';

// Helpers
import logging from './helpers/logging';

dotenv.config();

const app: Application = express();
const PORT = process.env.SERVER_PORT ?? 4000;

// Setup logging
if ((app.get('env') === 'production' && process.env.ENABLE_LOGGING) ?? false) {
  logging.setup();
  app.use(morgan('common', { stream: logging.getAccessLogFileStream() }));
} else {
  app.use(morgan('dev'));
}

// Configure with more secure http headers
app.use(helmet());

// Use json responses
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? '*',
  })
);

// Configure swagger docs
const specs = swaggerJsdoc(swaggerOptions);

// Default endpoint re-route if required
app.get('/', (_, res) => res.json({ message: 'Express + TypeScript Server' }));

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Main entry point for the api's
app.use('/', logger, apiHandler);

// Setup middlewares
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${PORT}. Swagger Docs http://localhost:${PORT}/api-docs`
  );
});
