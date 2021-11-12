/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
import * as httpStatusCodes from 'http-status-codes';
import { logger } from './logger';

export const sendResponseData = (res, message, httpStatusCode = httpStatusCodes.OK, data = null, extraData = null) => {
    const responseData = {
        status: httpStatusCodes.getStatusText(httpStatusCode),
        statusCode: httpStatusCode,
        message,
        data,
    };
    // if(_.isEmpty(data)) delete responseData.data;
    if (!data) { delete responseData.data; }
    if (extraData) {
        for (const key in extraData) {
            if (extraData.hasOwnProperty(key)) {
                const element = extraData[key];
                responseData[key] = element;
            }
        }
    }
    logger.info('Sending Request Response', responseData);
    return res.status(httpStatusCode).json(responseData);
};
