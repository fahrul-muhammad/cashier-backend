CREATE TABLE material (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  base_unit VARCHAR(10) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT now()
);
