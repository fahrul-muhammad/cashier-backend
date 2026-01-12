import { Request, Response } from "express";
import { sendResponse } from "../helpers/standardResponse.helper";
import { MaterialPurchase } from "../models/materialPurchase.model";
import MaterialPurchaseRepository from "../repository/materialPurchase.repository";

class MaterialPurchaseController {
  materialPurchaseRepository: MaterialPurchaseRepository;

  constructor(materialPurchaseRepo: MaterialPurchaseRepository) {
    this.materialPurchaseRepository = materialPurchaseRepo;
  }

  getAllMaterialPurchase = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const results =
        await this.materialPurchaseRepository.getAllMaterialPurchase();
      sendResponse<MaterialPurchase[]>(res, 200, results);
    } catch (error) {
      throw error;
    }
  };

  createMaterialPurchase = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const reqBody = req.body;
      const result = await this.materialPurchaseRepository.addMaterialPurchase(
        reqBody
      );
      sendResponse<MaterialPurchase>(res, 201, result);
    } catch (error) {
      throw error;
    }
  };

  getMaterialPurchaseById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const purchaseId = req.params.id;
      const result =
        await this.materialPurchaseRepository.getMaterialPurchaseById(
          purchaseId
        );

      if (!result) {
        sendResponse<string>(res, 404, "Material purchase not found");
        return;
      }

      sendResponse<MaterialPurchase>(res, 200, result);
    } catch (error) {
      throw error;
    }
  };

  updateMaterialPurchase = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const reqBody = req.body;

      const result =
        await this.materialPurchaseRepository.updateMaterialPurchase(
          id,
          reqBody
        );

      sendResponse<MaterialPurchase>(res, 200, result);
    } catch (error) {
      throw error;
    }
  };

  deleteMaterialPurchase = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const purchaseId = req.params.id;
      await this.materialPurchaseRepository.deleteMaterialPurchase(purchaseId);
      sendResponse<string>(res, 200, "Material purchase deleted");
    } catch (error) {
      throw error;
    }
  };
}

export default MaterialPurchaseController;
