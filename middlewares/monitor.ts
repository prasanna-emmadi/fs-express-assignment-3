import { Request, Response } from "express";

export function monitorLoggingMiddleware(
  req: Request,
  _: Response,
  next: () => void
) {
  console.log("👀 [INFO]: ", req.method, req.path);
  next();
}
