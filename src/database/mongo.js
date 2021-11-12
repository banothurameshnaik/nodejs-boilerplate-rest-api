/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { logger } from '../utils/logger';
import { MONGODB_URL, ENVIRONMENT } from '../config/config';

dotenv.config();

export const dbConnect = async () => {
    logger.info(`Connecting to mongo db - Database URI: ${MONGODB_URL}, Environment: ${ENVIRONMENT}`);
    // db options
    const dbOptions = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        keepAlive: 1,
    };
    try {
        await mongoose.connect(MONGODB_URL, dbOptions);
        logger.info('Connected to mongodb database successfully!');
        return true;
    } catch (error) {
        logger.error('Error while connecting to mongodb database!', JSON.stringify(error));
        return false;
    }
};

// Disconnect the database connection
export const dbDisConnect = async () => mongoose.disconnect();

export const { ObjectId } = mongoose.Types;
