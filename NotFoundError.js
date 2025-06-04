const ApiError = require('./ApiError');

class NotFoundError extends ApiError {
  constructor(resource = 'Resource') {
    super(`${resource} not found`, 404);
  }
}

module.exports = NotFoundError;
