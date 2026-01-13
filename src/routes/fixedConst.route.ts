import Express from "express";
import { Pool } from "pg";
import FixedCostController from "../controllers/fixedCost.controller";
import FixedCostRepository from "../repository/fixedCost.repository";

export function fixedCostRoute(pool: Pool) {
  const fixedCostRepo = new FixedCostRepository(pool);
  const fixedCostCtrl = new FixedCostController(fixedCostRepo);

  const route = Express.Router();

  route.get("/", fixedCostCtrl.GetAllFixedConst);
  route.post("/post", fixedCostCtrl.CreateFixedCost);
  route.patch("/update/:id", fixedCostCtrl.UpdateFixedCostById);
  route.delete("/delete/:id", fixedCostCtrl.DeleteFixedCostById);

  return route;
}
