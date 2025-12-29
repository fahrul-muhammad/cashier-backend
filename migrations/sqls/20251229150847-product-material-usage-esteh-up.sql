INSERT INTO product_material_usage (
  id, product_id, material_id, usage_quantity, unit
)
SELECT
  gen_random_uuid(),
  p.id,
  m.id,
  1,
  'pcs'
FROM product p
JOIN material m ON m.name = 'Teh Celup'
WHERE p.product_name = 'Es Teh Manis';

INSERT INTO product_material_usage (
  id, product_id, material_id, usage_quantity, unit
)
SELECT
  gen_random_uuid(),
  p.id,
  m.id,
  8,
  'g'
FROM product p
JOIN material m ON m.name = 'Gula Pasir'
WHERE p.product_name = 'Es Teh Manis';

