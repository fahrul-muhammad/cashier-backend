CREATE TABLE sale (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sale_date TIMESTAMP NOT NULL DEFAULT now(),
  total_price NUMERIC(12,2) NOT NULL,
  paid BOOLEAN NOT NULL DEFAULT true
);
