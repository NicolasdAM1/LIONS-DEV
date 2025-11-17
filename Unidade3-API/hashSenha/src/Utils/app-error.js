export default function createError(message, statusCode = 500) {
    const error = new Error(message);
    error.name = 'HttpError';
    error.statusCode = statusCode;
    return error;
  }