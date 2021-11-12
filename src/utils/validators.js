/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-escape */

import _ from 'lodash';
import { NOT_ACCEPTABLE } from 'http-status-codes';
import { sendResponseData } from './response';

export const emailValidation = (email) => {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(String(email).toLowerCase());
};

export const checkRequiredFields = (req, res, requiredAttributes) => {
    const errorInfo = Object.keys(requiredAttributes).reduce((error, attribute) => {
        if (_.isUndefined(req.body[attribute])) {
            const element = requiredAttributes[attribute];
            error = (error) ? `${error}, ${element}` : `Missing ${element}`;
        }
        return error;
    }, '');
    if (errorInfo) {
        const message = 'Missing required fields';
        const data = {
            info: errorInfo,
            requiredFields: requiredAttributes,
        };
        sendResponseData(res, message, NOT_ACCEPTABLE, {}, data);
        return false;
    }
    return true;
};

export const validateLogin = (req, res, next) => {
    const fields = {
        email: 'Email',
        password: 'Password',
    };
    if (checkRequiredFields(req, res, fields)) {
        next();
    }
};

export const validateRegister = (req, res, next) => {
    const fields = {
        name: 'Name',
        email: 'Email',
        password: 'Password',
    };
    if (checkRequiredFields(req, res, fields)) {
        next();
    }
};
