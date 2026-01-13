CREATE TABLE outlets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  outlet_name VARCHAR(100) NOT NULL,
  address TEXT,
  phone_number VARCHAR(20),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  CONSTRAINT fk_user
    FOREIGN KEY(user_id) 
    REFERENCES users(id)
);