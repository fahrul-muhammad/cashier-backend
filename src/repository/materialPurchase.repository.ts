import { Pool } from "pg";
import { MaterialPurchase } from "../models/materialPurchase.model";

class MaterialPurchaseRepository {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAllMaterialPurchase = async (): Promise<MaterialPurchase[]> => {
    try {
      const query = await this.connection.query(
        "SELECT * FROM cashier.material_purchase;"
      );
      const result = query.rows;
      return result as MaterialPurchase[];
    } catch (error) {
      throw error;
    }
  };

  addMaterialPurchase = async (
    body: MaterialPurchase
  ): Promise<MaterialPurchase> => {
    try {
      const query = `
        INSERT INTO cashier.material_purchase
        (material_id, total_price, quantity, unit, price_per_base_unit, purchase_date)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;

      const values = [
        body.material_id,
        body.total_price,
        body.quantity,
        body.unit,
        body.price_per_base_unit,
        body.purchase_date,
      ];

      const result = await this.connection.query(query, values);
      return result.rows[0] as MaterialPurchase;
    } catch (error) {
      throw error;
    }
  };

  getMaterialPurchaseById = async (
    purchaseId: string
  ): Promise<MaterialPurchase | null> => {
    try {
      const query = "SELECT * FROM cashier.material_purchase WHERE id = $1;";
      const values = [purchaseId];
      const result = await this.connection.query(query, values);

      if (result.rows.length === 0) {
        return null;
      }

      return result.rows[0] as MaterialPurchase;
    } catch (error) {
      throw error;
    }
  };

  updateMaterialPurchase = async (
    id: string,
    body: any
  ): Promise<MaterialPurchase> => {
    try {
      const fields: string[] = [];
      const values: (string | number)[] = [];
      let index: number = 1;

      if (body.material_id) {
        fields.push(`material_id = $${index++}`);
        values.push(body.material_id);
      }

      if (body.total_price) {
        fields.push(`total_price = $${index++}`);
        values.push(body.total_price);
      }

      if (body.quantity) {
        fields.push(`quantity = $${index++}`);
        values.push(body.quantity);
      }

      if (body.unit) {
        fields.push(`unit = $${index++}`);
        values.push(body.unit);
      }

      if (body.price_per_base_unit) {
        fields.push(`price_per_base_unit = $${index++}`);
        values.push(body.price_per_base_unit);
      }

      if (body.purchase_date) {
        fields.push(`purchase_date = $${index++}`);
        values.push(body.purchase_date);
      }

      if (fields.length === 0) {
        throw new Error("No fields to update");
      }

      const query = `
        UPDATE cashier.material_purchase
        SET ${fields.join(", ")}
        WHERE id = $${index}
        RETURNING *;
      `;

      values.push(id);

      const result = await this.connection.query(query, values);
      return result.rows[0] as MaterialPurchase;
    } catch (error) {
      throw error;
    }
  };

  deleteMaterialPurchase = async (id: string): Promise<void> => {
    try {
      const query = "DELETE FROM cashier.material_purchase WHERE id = $1;";
      const values = [id];
      await this.connection.query(query, values);
    } catch (error) {
      throw error;
    }
  };
}

export default MaterialPurchaseRepository;
