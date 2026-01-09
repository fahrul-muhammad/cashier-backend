import { Pool } from "pg";
import { Product } from "../models/product.model";

class ProductRepository {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getAllProduct = async (): Promise<Product[]> => {
    try {
      const query = await this.connection.query("SELECT * FROM cashier.product u WHERE u.is_active = true;");
      const result = query.rows;
      return result as Product[];
    } catch (error) {
      throw error;
    }
  };

  addProduct = async (body: Product): Promise<Product> => {
    try {
      const query = `
      INSERT INTO cashier.product 
      (product_name, selling_price, product_image)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
      const values = [body.product_name, body.selling_price, body.product_image ?? null];
      const result = await this.connection.query(query, values);
      return result.rows[0] as Product;
    } catch (error) {
      throw error;
    }
  };

  archiveProduct = async (productId: string): Promise<void> => {
    try {
      const query = "UPDATE cashier.product SET is_active = false WHERE id = $1;";
      const values = [productId];
      await this.connection.query(query, values);
    } catch (error) {
      throw error;
    }
  };

  restoreProduct = async (productId: string): Promise<void> => {
    try {
      const query = "UPDATE cashier.product SET is_active = true WHERE id = $1;";
      const values = [productId];
      await this.connection.query(query, values);
    } catch (error) {
      throw error;
    }
  };

  getProductById = async (productId: string): Promise<Product | null> => {
    try {
      const query = "SELECT * FROM cashier.product WHERE id = $1 AND is_active = true;";
      const values = [productId];
      const result = await this.connection.query(query, values);
      if (result.rows.length === 0) {
        return null;
      }
      return result.rows[0] as Product;
    } catch (error) {
      throw error;
    }
  };

  updateProduct = async (id: string, body: any): Promise<any> => {
    try {
      const fields: string[] = [];
      const values: (string | number)[] = [];
      let index: number = 1;

      if (body.product_name) {
        fields.push(`product_name = $${index++}`);
        values.push(body.product_name);
      }

      if (body.selling_price) {
        fields.push(`selling_price = $${index++}`);
        values.push(Number(body.selling_price));
      }

      if (body.product_image) {
        fields.push(`product_image = $${index++}`);
        values.push(body.product_image);
      }

      if (fields.length === 0) {
        throw new Error("No fields to update");
      }

      const query = `
        UPDATE cashier.product
        SET ${fields.join(", ")}
        WHERE id = $${index}
        RETURNING *;
      `;

      values.push(id);

      const result = await this.connection.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  };
}

export default ProductRepository;
