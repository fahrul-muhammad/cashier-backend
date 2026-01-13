import { Response } from "express";
import { ApiResponse } from "../types/apiResponse.type";

export function sendResponse<T>(res: Response, statusCode: number, data: T): Response {
  const response: ApiResponse<T> = {
    status: "success",
    statusCode,
    data,
  };

  return res.status(statusCode).json(response);
}
