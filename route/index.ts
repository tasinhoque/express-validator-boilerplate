import { Router, Request, Response } from 'express';
import { validate } from '../middleware';
import { registerValidator } from '../validator';

const router = Router();

router.post(
  '/register',
  validate(registerValidator),
  (req: Request, res: Response) => {
    res.sendStatus(201);
  }
);

export { router as rootRouter };
