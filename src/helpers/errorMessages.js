const errorMessages = {
  INTERNAL_ERROR: 'Error when trying to perform operation',
  FIELDS_REQ: 'Some required fields are missing | status 400',
  INVALID_FIELDS: 'Invalid fields | status 400',
  INVALID_NAME: '"displayName" length must be at least 8 characters long | status 400',
  INVALID_EMAIL: '"email" must be a valid email | status 400',
  INVALID_PASS: '"password" length must be at least 6 characters long | status 400',
  USER_A_REG: 'User already registered',
};

module.exports = errorMessages;
