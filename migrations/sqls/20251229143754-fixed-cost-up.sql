CREATE TABLE fixed_cost (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  total_cost NUMERIC(12,2) NOT NULL,
  target_unit_per_month INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT now()
);
