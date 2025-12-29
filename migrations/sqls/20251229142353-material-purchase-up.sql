CREATE TABLE material_purchase (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_id UUID NOT NULL,
  total_price NUMERIC(12,2) NOT NULL,
  quantity NUMERIC(12,3) NOT NULL,
  unit VARCHAR(10) NOT NULL,
  price_per_base_unit NUMERIC(12,6) NOT NULL,
  purchase_date DATE NOT NULL,

  CONSTRAINT fk_material_purchase_material
    FOREIGN KEY (material_id)
    REFERENCES material(id)
    ON DELETE RESTRICT
);
