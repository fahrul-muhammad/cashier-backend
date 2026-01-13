import { Request, Response } from "express";
import { sendResponse } from "../helpers/standardResponse.helper";
import { FixedCost } from "../models/fixedCost.model";
import FixedCostRepository from "../repository/fixedCost.repository";

class FixedCostController {
  private fixedConstRepository: FixedCostRepository;

  constructor(fixedConstRepository: FixedCostRepository) {
    this.fixedConstRepository = fixedConstRepository;
  }

  GetAllFixedConst = async (req: Request, res: Response): Promise<void> => {
    try {
      const results = await this.fixedConstRepository.GetAllFixedCost();
      sendResponse<FixedCost[]>(res, 200, results);
    } catch (error) {
      console.log(error);
      sendResponse(res, 500, error);
    }
  };

  CreateFixedCost = async (req: Request, res: Response): Promise<void> => {
    try {
      const body: FixedCost = req.body;
      const result = await this.fixedConstRepository.CreateFixedCost(body);
      sendResponse<FixedCost>(res, 201, result);
    } catch (error) {
      console.log(error);
      sendResponse(res, 500, error);
    }
  };

  UpdateFixedCostById = async (req: Request, res: Response): Promise<void> => {
    try {
      const body: FixedCost = req.body;
      const id: string = req.params.id;
      const result = await this.fixedConstRepository.EditFixedCostById(body, id);
      sendResponse(res, 200, result);
    } catch (error) {
      console.log(error);
      sendResponse(res, 500, error);
    }
  };

  DeleteFixedCostById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id;
      const result = await this.fixedConstRepository.DeleteFixedCostById(id);
      sendResponse(res, 200, "Item Deleted");
    } catch (error) {
      console.log(error);
      sendResponse(res, 500, error);
    }
  };
}

export default FixedCostController;
