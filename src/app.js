/* eslint-disable no-unused-vars */
import express from 'express';
import cors from 'cors';
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes';

import { logger } from './utils/logger';
import routes from './routes';
import { sendResponseData } from './utils/response';
import { MSG_HEALTH_CHECK_SUCCESS, MSG_NOT_FOUND_ROUTE } from './utils/constants';

// Application
const app = express();

// Middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// Routes

// Welcome route
app.get('/', (req, res) => {
    const message = 'Welcome! Application started and running!';
    sendResponseData(res, message);
});

// Healthcheck route
app.get('/healthcheck', (req, res) => {
    sendResponseData(res, MSG_HEALTH_CHECK_SUCCESS);
});

// API routes
app.use('/api/', routes);

// Not found routes
app.use('*', (req, res) => {
    logger.info(`User is requested for path which not found: originalUrl - ${req.originalUrl}`);
    sendResponseData(res, MSG_NOT_FOUND_ROUTE, NOT_FOUND);
});

// Error handling routes
app.use((err, req, res, _next) => {
    // Do logging and user-friendly error message display
    logger.error(err);
    const message = 'Something went wrong!';
    sendResponseData(res, message, INTERNAL_SERVER_ERROR);
});

export default app;
