import { Router, Request, Response } from 'express';
import { validate } from '../middleware';
import { registerSchema } from '../schema';

const router = Router();

router.post(
  '/register',
  validate(registerSchema),
  (req: Request, res: Response) => {
    res.sendStatus(201);
  }
);

export { router as rootRouter };
