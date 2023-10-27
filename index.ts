import express, { Request, Response } from "express";

import { errorLoggingMiddleware } from "./middlewares/error.js";
import { loggingMiddleware } from "./middlewares/logging.js";
import { monitorLoggingMiddleware } from "./middlewares/monitor.js";
import categoriesRoute from "./routes/categoriesRoute.js";
import itemsRoute from "./routes/itemsRoute.js";
import productsRoute from "./routes/productsRoute.js";
import usersRoute from "./routes/usersRoute.js";

const PORT = 8080;
const app = express();
app.use(express.json());

app.get("/hello", loggingMiddleware, (req: Request, res: Response) => {
  res.json({ msg: "hello, from Express.js!" });
});

app.use(errorLoggingMiddleware);
app.use(loggingMiddleware);

app.use("/items", itemsRoute);
app.use("/users", usersRoute);
app.use("/categories", categoriesRoute);
app.use("/products", productsRoute);

app.use(monitorLoggingMiddleware);

app.listen(PORT, () => {
  console.log(`👀 app is running at localhost:${PORT}`);
});
