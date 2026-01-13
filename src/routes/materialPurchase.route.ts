import Express from "express";
import { Pool } from "pg";
import MaterialPurchaseController from "../controllers/materialPurchase.controller";
import MaterialPurchaseRepository from "../repository/materialPurchase.repository";

export function materialPurchaseRoute(pool: Pool) {
  const materialPurchaseRepo = new MaterialPurchaseRepository(pool);
  const materialPurchaseCtrl = new MaterialPurchaseController(materialPurchaseRepo);

  const route = Express.Router();

  route.get("/", materialPurchaseCtrl.getAllMaterialPurchase);
  route.post("/post", materialPurchaseCtrl.createMaterialPurchase);
  route.get("/detail/:id", materialPurchaseCtrl.getMaterialPurchaseById);
  route.patch("/update/:id", materialPurchaseCtrl.updateMaterialPurchase);
  route.delete("/delete/:id", materialPurchaseCtrl.deleteMaterialPurchase);

  return route;
}
