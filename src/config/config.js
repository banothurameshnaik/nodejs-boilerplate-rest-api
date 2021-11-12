import dotenv from 'dotenv';

dotenv.config();

export const ENVIRONMENT = process.env.ENVIRONMENT || 'local';

export const PORT = process.env.PORT || 8000;

export const APP_NAME = process.env.APP_NAME || 'online-notes-server';

export const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

export const MONGODB_NAME = process.env.MONGODB_NAME || APP_NAME;

export const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/${MONGODB_NAME}`;

export const MONGODB_TEST_URI = process.env.MONGODB_TEST_URI || `mongodb://localhost/${MONGODB_NAME}_testdb`;

export const MONGODB_URL = ENVIRONMENT === 'test' ? MONGODB_TEST_URI : MONGODB_URI;

export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'letsdevelopskills';

export const TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN || '1 day';
