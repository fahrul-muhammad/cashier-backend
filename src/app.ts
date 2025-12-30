import express, { Request, Response } from "express";
import path from "path";
import route from "./routes";

const app = express();
app.use(express.json());
app.use(route);

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/test", function (req: Request, res: Response) {
  res.json("message: hellow");
});

export default app;
