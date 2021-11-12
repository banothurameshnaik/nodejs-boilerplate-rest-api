/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import { PORT } from './config/config';
import { logger } from './utils/logger';
import { dbConnect } from './database/mongo';
import app from './app';

// Application
app.listen(PORT, async () => {
    logger.info(`Application started and running on PORT ${PORT} - http://localhost:${PORT}`);

    // Database Connection
    const dbStatus = await dbConnect().then((result) => result);
    logger.info('Mongo Database Connection Status', dbStatus);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
});

export default app;
