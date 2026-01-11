CREATE TABLE outlets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  outlet_name VARCHAR(100) NOT NULL,
  address TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT now(),
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES users(id)
      ON DELETE CASCADE
);