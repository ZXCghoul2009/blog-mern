import { body } from "express-validator";

export const singUpValodation = [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('userName').isLength({ min: 4 }),
    body('avatarUrl').optional().isURL(),
];