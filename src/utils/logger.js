import bunyan from 'bunyan';

import { APP_NAME, LOG_LEVEL, ENVIRONMENT } from '../config/config';

// Logger
const devLogger = bunyan.createLogger({
    name: APP_NAME,
    level: LOG_LEVEL,
    src: true,
});

const productionLogger = bunyan.createLogger({
    name: APP_NAME,
    level: LOG_LEVEL,
    src: false,
});

export const logger = ENVIRONMENT === 'production' ? productionLogger : devLogger;
