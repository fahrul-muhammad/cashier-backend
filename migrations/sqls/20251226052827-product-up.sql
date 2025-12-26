CREATE TABLE cashier.product (
	id uuid DEFAULT gen_random_uuid() NULL,
	product_name varchar(50) NOT NULL,
	selling_product int4 NOT NULL,
	product_image varchar(100) NULL,
	CONSTRAINT product_pkey PRIMARY KEY (id)
);