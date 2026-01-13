import express from "express";
import { pool } from "../config/db";
import { authMiddleware } from "../middleware/auth.middleware";
import { authRoute } from "./auth.route";
import { fixedCostRoute } from "./fixedConst.route";
import { materialRoute } from "./material.route";
import { materialPurchaseRoute } from "./materialPurchase.route";
import { productRoute } from "./product.route";
import { productMaterialUsageRoute } from "./productMaterialUsage.route";

const route = express.Router();
route.use("/materials", authMiddleware, materialRoute(pool));
route.use("/products", authMiddleware, productRoute(pool));
route.use("/material-usage", authMiddleware, productMaterialUsageRoute(pool));
route.use("/material-purchase", authMiddleware, materialPurchaseRoute(pool));
route.use("/auth", authRoute(pool));
route.use("/fixed-cost", authMiddleware, fixedCostRoute(pool));

export default route;
