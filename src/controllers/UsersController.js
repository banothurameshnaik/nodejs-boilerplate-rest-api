import {
    OK,
} from 'http-status-codes';

import { logger } from '../utils/logger';

import { sendResponseData } from '../utils/response';

import {
    MSG,
} from '../utils/constants';

export const getUserDetails = async (req, res) => {
    // Get request details
    const { id: userId } = req.params;
    // Query and get user details
    const user = {};
    logger.info(`User details loaded successfully - User ID: ${userId}`);
    return sendResponseData(res, MSG.USER_EXISTS, OK, user);
};

export const updateUserDetails = async (req, res) => {
    // Get request details
    const { id: userId } = req.params;
    logger.info(`User details updated successfully - User ID: ${userId}`);
    return sendResponseData(res, MSG.UPDATED_SUCCESSFULLY, OK);
};

export const deleteUserDetails = async (req, res) => {
    // Get request details
    const { id: userId } = req.params;
    logger.info(`User deleted successfully - User ID: ${userId}`);
    return sendResponseData(res, MSG.DELETED_SUCCESSFULLY, OK);
};
