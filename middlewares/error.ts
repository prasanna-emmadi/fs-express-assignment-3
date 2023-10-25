export function errorLoggingMiddleware(error: any, req: any, res: { json: (arg0: { msg: string }) => void }, next: any) {
  console.log("👀 ERRROOOR!!")
  res.json({ msg: "ERROR!!!!" })
}
