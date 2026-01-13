import Express from "express";
import { Pool } from "pg";
import AuthController from "../controllers/auth.controller";
import AuthRepository from "../repository/auth.repository";

export function authRoute(pool: Pool) {
  const authRepo = new AuthRepository(pool);
  const authCtrl = new AuthController(authRepo);
  const route = Express.Router();

  route.post("/register", authCtrl.register);
  route.post("/login", authCtrl.login);

  return route;
}
