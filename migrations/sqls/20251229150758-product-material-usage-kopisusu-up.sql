INSERT INTO product_material_usage (
  id, product_id, material_id, usage_quantity, unit
)
SELECT
  gen_random_uuid(),
  p.id,
  m.id,
  15,
  'g'
FROM product p
JOIN material m ON m.name = 'Kopi Bubuk'
WHERE p.product_name = 'Es Kopi Susu';

INSERT INTO product_material_usage (
  id, product_id, material_id, usage_quantity, unit
)
SELECT
  gen_random_uuid(),
  p.id,
  m.id,
  120,
  'ml'
FROM product p
JOIN material m ON m.name = 'Susu Cair'
WHERE p.product_name = 'Es Kopi Susu';

INSERT INTO product_material_usage (
  id, product_id, material_id, usage_quantity, unit
)
SELECT
  gen_random_uuid(),
  p.id,
  m.id,
  10,
  'g'
FROM product p
JOIN material m ON m.name = 'Gula Pasir'
WHERE p.product_name = 'Es Kopi Susu';