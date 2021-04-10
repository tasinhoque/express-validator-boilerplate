import { body } from 'express-validator';

export const registerValidator = [
  body('username')
    .isEmail()
    .withMessage('Username must contain a valid email address'),
  body('firstName').exists({ checkFalsy: true }),
  body('password')
    .isLength({ min: 5 })
    .withMessage('Password must contain at least 5 characters'),
];
