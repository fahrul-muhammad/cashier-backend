import express from "express";
import { pool } from "../config/db";
import { materialRoute } from "./material.route";
import { productRoute } from "./product.route";

const route = express.Router();
route.use("/materials", materialRoute(pool));
route.use("/products", productRoute(pool));

export default route;
