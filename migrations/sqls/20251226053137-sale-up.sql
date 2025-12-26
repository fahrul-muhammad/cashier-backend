CREATE TABLE cashier.sale (
	id uuid DEFAULT gen_random_uuid() NULL,
  product_id uuid NOT NULL,
	quantity int4 NOT NULL,
	sale_price int4 NOT NULL,
	sale_date date NOT NULL,
	paid bool DEFAULT false NULL,
	CONSTRAINT sale_pkey PRIMARY KEY (id),
  CONSTRAINT fk_sale_product FOREIGN KEY (product_id) REFERENCES cashier.product(id)
);
