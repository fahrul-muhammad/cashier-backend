import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/jwt";
import { sendResponse } from "../helpers/standardResponse.helper";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return sendResponse(res, 401, "Authorization header missing");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch {
    return sendResponse(res, 401, "Invalid or expired token");
  }
};
