export function loggingMiddleware(req: { method: any; path: any }, _: any, next: () => void) {
  console.log("👀 [INFO]: ", req.method, req.path)
  next()
}
