import express, { Request, Response } from "express";
import itemsRoute from "./routes/itemsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import { errorLoggingMiddleware } from "./middlewares/error.js";
import { loggingMiddleware } from "./middlewares/logging.js";
import { monitorLoggingMiddleware } from "./middlewares/monitor.js";

import productRoute from "./routes/productsRoute.js";
import categoriesRoute from "./routes/categoriesRoute.js";

const PORT = 8080;
const app = express();
app.use(express.json());

app.get("/hello", loggingMiddleware, (req: Request, res: Response) => {
  res.json({ msg: "hello, from Express.js!" });
});

app.use(errorLoggingMiddleware);
app.use(loggingMiddleware);
app.use(monitorLoggingMiddleware);

app.use("/items", itemsRoute);
app.use("/users", usersRoute);
app.use("/categories", categoriesRoute);
app.use("/products", productRoute);

app.listen(PORT, () => {
  console.log(`👀 app is running at localhost:${PORT}`);
});
