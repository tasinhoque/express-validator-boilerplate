import { Router, Request, Response } from 'express';
import { validateRequestSchema } from '../middleware';
import { registerSchema } from '../schema';

export const rootRouter = Router();

rootRouter.post(
  '/register',
  registerSchema,
  validateRequestSchema,
  (req: Request, res: Response) => {
    res.sendStatus(201);
  }
);
