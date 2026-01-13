import express from "express";
import { pool } from "../config/db";
import { materialRoute } from "./material.route";
import { materialPurchaseRoute } from "./materialPurchase.route";
import { productRoute } from "./product.route";
import { productMaterialUsageRoute } from "./productMaterialUsage.route";

const route = express.Router();
route.use("/materials", materialRoute(pool));
route.use("/products", productRoute(pool));
route.use("/material-usage", productMaterialUsageRoute(pool));
route.use("/material-purchase", materialPurchaseRoute(pool));

export default route;
