import express, { Request, Response } from "express";
import route from "./routes";

const app = express();
app.use(express.json());
app.use(route);

app.get("/test", function (req: Request, res: Response) {
  res.json("message: hellow");
});

export default app;
