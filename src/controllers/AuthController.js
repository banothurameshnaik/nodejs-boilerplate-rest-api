import {
    OK,
    UNAUTHORIZED,
} from 'http-status-codes';

import { logger } from '../utils/logger';

import { sendResponseData } from '../utils/response';

import {
    MSG,
    MSG_UNAUTHORIZED,
} from '../utils/constants';

export const doRegister = (req, res) => {
    const userId = 1;

    logger.info(`User register successfully || User ID: ${userId}`);
    // Send response
    return sendResponseData(res, MSG.USER_REGISTER_SUCCESS, OK);
};

export const doLogin = (req, res) => {
    const userId = 1;

    logger.info(`User login success || User ID: ${userId}`);
    // Send response
    return sendResponseData(res, MSG.USER_LOGIN_SUCCESS, OK);
};

export const isAuthorizedUser = (req, res, next) => {
    const authenticated = true;

    // Validate JWT and Verify user is authenticated or not here

    if (authenticated) return next();

    return sendResponseData(res, MSG_UNAUTHORIZED, UNAUTHORIZED);
};
