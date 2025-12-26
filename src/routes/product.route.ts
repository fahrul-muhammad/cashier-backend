import { IRouter } from "express";
import { Pool } from "pg";
import ProductController from "../controllers/product.controller";
import ProductRepository from "../repository/product.repository";

export function productRoute(pool: Pool, route: IRouter) {
  const productRepo = new ProductRepository(pool);
  const productCtrl = new ProductController(productRepo);

  route.get("/", productCtrl.getAllProduct);
  return route;
}
