const errorMessages = {
  INTERNAL_ERROR: 'Error when trying to perform operation',
  FIELDS_REQ: 'Some required fields are missing',
  INVALID_FIELDS: 'Invalid fields',
  INVALID_NAME: '"displayName" length must be at least 8 characters long',
  INVALID_EMAIL: '"email" must be a valid email',
  INVALID_PASS: '"password" length must be at least 6 characters long',
  USER_A_REG: 'User already registered',
  TOKEN_N_FOUND: 'Token not found',
  INVALID_TOKEN: 'Expired or invalid token',
  USER_N_FOUND: 'User does not exist',
  NAME_REQUIRED: '"name" is required',
  CAT_N_FOUND: '"categoryIds" not found',
  POST_N_FOUND: 'Post does not exist',
  UNAUTHORIZED: 'Unauthorized user',
};

module.exports = errorMessages;
