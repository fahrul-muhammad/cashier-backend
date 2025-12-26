

CREATE TABLE cashier.hpp (
	id uuid DEFAULT gen_random_uuid() NULL,
	product_id uuid NOT NULL,
	hpp_per_unit int4 NOT NULL,
	total_stock int4 NOT NULL,
	"period" date NOT NULL,
	CONSTRAINT hpp_pkey PRIMARY KEY (id),
  CONSTRAINT fk_hpp_product FOREIGN KEY (product_id) REFERENCES cashier.product(id)
);

