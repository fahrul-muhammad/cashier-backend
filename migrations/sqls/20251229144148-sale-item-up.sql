CREATE TABLE sale_item (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sale_id UUID NOT NULL,
  product_id UUID NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  selling_price NUMERIC(12,2) NOT NULL,
  hpp_at_sale NUMERIC(12,2) NOT NULL,

  CONSTRAINT fk_sale_item_sale
    FOREIGN KEY (sale_id)
    REFERENCES sale(id)
    ON DELETE CASCADE,

  CONSTRAINT fk_sale_item_product
    FOREIGN KEY (product_id)
    REFERENCES product(id)
    ON DELETE RESTRICT
);
