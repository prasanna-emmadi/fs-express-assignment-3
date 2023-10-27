import { Request, Response } from "express";

export function monitorLoggingMiddleware(
  req: Request,
  res: Response,
  next: () => void
) {
  if (req.method === "POST" && res.statusCode === 200) {
    console.log("👀 [INFO]: created " + req.path);
  }
  next();
}
