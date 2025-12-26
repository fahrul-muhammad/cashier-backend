CREATE TABLE cashier.product_purchase (
  id uuid DEFAULT gen_random_uuid() NULL,
  product_id uuid NOT NULL,
	purchase_price int4 NOT NULL,
	quantity int4 NOT NULL,
	purchase_date date NOT NULL,
	CONSTRAINT product_purchase_pkey PRIMARY KEY (id),
  CONSTRAINT fk_purchase_product FOREIGN KEY (product_id) REFERENCES cashier.product(id)
);
