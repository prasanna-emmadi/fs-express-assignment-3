import { NextFunction, Request, Response } from "express";

interface Error {
  status?: number;
}

export function errorLoggingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.status && error.status >= 400 && error.status < 600) {
    console.log(`👀 ${error.status} ERRROOOR!!`);
    res.json({ msg: `${error.status} ERROR!!!!` });
  }

  next(error);
}
