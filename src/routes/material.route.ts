import { IRouter } from "express";
import { Pool } from "pg";
import MaterialController from "../controllers/material.controller";
import MaterialRepository from "../repository/material.repository";

export function materialRoute(pool: Pool, route: IRouter) {
  const materialRepo = new MaterialRepository(pool);
  const materialCtrl = new MaterialController(materialRepo);

  route.get("/", materialCtrl.getAllMaterial);
  route.post("/post", materialCtrl.createMaterial);
  route.get("/detail/:id", materialCtrl.getMaterialById);
  route.patch("/update/:id", materialCtrl.updateMaterial);
  route.patch("/delete/:id", materialCtrl.archiveMaterial);
  route.patch("/restore/:id", materialCtrl.restoreMaterial);

  return route;
}
