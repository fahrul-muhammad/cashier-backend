import express from "express";
import { pool } from "../config/db";
import { productRoute } from "./product.route";

const route = express.Router();
route.use("/products", productRoute(pool, route));

export default route;
