INSERT INTO product_fixed_cost (
  id, product_id, fixed_cost_id
)
SELECT
  gen_random_uuid(),
  p.id,
  f.id
FROM product p
JOIN fixed_cost f ON f.name IN ('Sewa Tempat', 'Gaji Karyawan', 'Internet')
WHERE p.product_name = 'Es Kopi Susu';
