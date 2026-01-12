import { IRouter } from "express";
import { Pool } from "pg";
import ProductMaterialUsageController from "../controllers/productMaterialUsage.controller";
import ProductMaterialUsageRepository from "../repository/productMaterialUsage.repository";

export function productMaterialUsageRoute(pool: Pool, route: IRouter) {
  const productMaterialUsageRepo = new ProductMaterialUsageRepository(pool);
  const productMaterialUsageCtrl = new ProductMaterialUsageController(
    productMaterialUsageRepo
  );

  route.get("/", productMaterialUsageCtrl.getAllProductMaterialUsage);
  route.post("/post", productMaterialUsageCtrl.createProductMaterialUsage);
  route.get(
    "/detail/:id",
    productMaterialUsageCtrl.getProductMaterialUsageById
  );
  route.patch(
    "/update/:id",
    productMaterialUsageCtrl.updateProductMaterialUsage
  );
  route.delete(
    "/delete/:id",
    productMaterialUsageCtrl.deleteProductMaterialUsage
  );

  return route;
}
