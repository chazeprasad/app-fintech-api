"use strict";
// import * as httpStatus from 'http-status'
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @extends Error
 */
class ApplicationError extends Error {
    constructor(message, status, isPublic) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        Error.captureStackTrace(this);
    }
}
exports.ApplicationError = ApplicationError;
/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class ApiError extends ApplicationError {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(message, status = 500, isPublic = false) {
        super(message, status, isPublic);
    }
}
exports.ApiError = ApiError;
