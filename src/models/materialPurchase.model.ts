export interface MaterialPurchase {
  id: string;
  material_id: string;
  total_price: number;
  quantity: number;
  unit: string;
  price_per_base_unit: number;
  purchase_date: string;
}
