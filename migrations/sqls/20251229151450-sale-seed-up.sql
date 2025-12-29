INSERT INTO sale (
  id,
  sale_date,
  total_price,
  paid
)
VALUES
  (
    gen_random_uuid(),
    now(),
    44000,
    true
  );
