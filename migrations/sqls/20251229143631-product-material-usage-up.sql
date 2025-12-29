CREATE TABLE product_material_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL,
  material_id UUID NOT NULL,
  usage_quantity NUMERIC(12,3) NOT NULL,
  unit VARCHAR(10) NOT NULL,

  CONSTRAINT fk_pmu_product
    FOREIGN KEY (product_id)
    REFERENCES product(id)
    ON DELETE CASCADE,

  CONSTRAINT fk_pmu_material
    FOREIGN KEY (material_id)
    REFERENCES material(id)
    ON DELETE RESTRICT,

  CONSTRAINT uq_product_material UNIQUE (product_id, material_id)
);
