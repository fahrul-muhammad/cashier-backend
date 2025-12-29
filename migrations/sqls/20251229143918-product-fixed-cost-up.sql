CREATE TABLE product_fixed_cost (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL,
  fixed_cost_id UUID NOT NULL,

  CONSTRAINT fk_pfc_product
    FOREIGN KEY (product_id)
    REFERENCES product(id)
    ON DELETE CASCADE,

  CONSTRAINT fk_pfc_fixed_cost
    FOREIGN KEY (fixed_cost_id)
    REFERENCES fixed_cost(id)
    ON DELETE RESTRICT,

  CONSTRAINT uq_product_fixed_cost UNIQUE (product_id, fixed_cost_id)
);
