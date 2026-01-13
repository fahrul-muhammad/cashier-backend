import { Pool } from "pg";
import { ProductMaterialUsage } from "../models/productMaterialUsage.model";

class ProductMaterialUsageRepository {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAllProductMaterialUsage = async (): Promise<ProductMaterialUsage[]> => {
    try {
      const query = await this.connection.query("SELECT * FROM cashier.product_material_usage;");
      const result = query.rows;
      return result as ProductMaterialUsage[];
    } catch (error) {
      throw error;
    }
  };

  addProductMaterialUsage = async (body: ProductMaterialUsage): Promise<ProductMaterialUsage> => {
    try {
      console.log("MASUK SINI di repository");
      const query = `
        INSERT INTO cashier.product_material_usage
        (product_id, material_id, usage_quantity, unit)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
      const values = [body.product_id, body.material_id, body.usage_quantity, body.unit];
      const result = await this.connection.query(query, values);
      return result.rows[0] as ProductMaterialUsage;
    } catch (error) {
      throw error;
    }
  };

  getProductMaterialUsageById = async (usageId: string): Promise<ProductMaterialUsage | null> => {
    try {
      const query = "SELECT * FROM cashier.product_material_usage WHERE id = $1;";
      const values = [usageId];
      const result = await this.connection.query(query, values);

      if (result.rows.length === 0) {
        return null;
      }

      return result.rows[0] as ProductMaterialUsage;
    } catch (error) {
      throw error;
    }
  };

  updateProductMaterialUsage = async (id: string, body: any): Promise<ProductMaterialUsage> => {
    try {
      const fields: string[] = [];
      const values: (string | number)[] = [];
      let index: number = 1;

      if (body.product_id) {
        fields.push(`product_id = $${index++}`);
        values.push(body.product_id);
      }

      if (body.material_id) {
        fields.push(`material_id = $${index++}`);
        values.push(body.material_id);
      }

      if (body.usage_quantity) {
        fields.push(`usage_quantity = $${index++}`);
        values.push(body.usage_quantity);
      }

      if (body.unit) {
        fields.push(`unit = $${index++}`);
        values.push(body.unit);
      }

      if (fields.length === 0) {
        throw new Error("No fields to update");
      }

      const query = `
        UPDATE cashier.product_material_usage
        SET ${fields.join(", ")}
        WHERE id = $${index}
        RETURNING *;
      `;

      values.push(id);

      const result = await this.connection.query(query, values);
      return result.rows[0] as ProductMaterialUsage;
    } catch (error) {
      throw error;
    }
  };

  deleteProductMaterialUsage = async (id: string): Promise<void> => {
    try {
      const query = "DELETE FROM cashier.product_material_usage WHERE id = $1;";
      const values = [id];
      await this.connection.query(query, values);
    } catch (error) {
      throw error;
    }
  };
}

export default ProductMaterialUsageRepository;
