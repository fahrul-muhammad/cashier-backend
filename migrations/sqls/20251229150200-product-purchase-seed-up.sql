INSERT INTO material_purchase (
  id, material_id, total_price, quantity, unit, price_per_base_unit, purchase_date
)
SELECT
  gen_random_uuid(),
  m.id,
  120000, 1000, 'g', 120,
  CURRENT_DATE
FROM material m
WHERE m.name = 'Kopi Bubuk';

INSERT INTO material_purchase (
  id, material_id, total_price, quantity, unit, price_per_base_unit, purchase_date
)
SELECT
  gen_random_uuid(),
  m.id,
  15000, 1000, 'ml', 15,
  CURRENT_DATE
FROM material m
WHERE m.name = 'Susu Cair';


INSERT INTO material_purchase (
  id, material_id, total_price, quantity, unit, price_per_base_unit, purchase_date
)
SELECT
  gen_random_uuid(),
  m.id,
  13000, 1000, 'g', 13,
  CURRENT_DATE
FROM material m
WHERE m.name = 'Gula Pasir';


INSERT INTO material_purchase (
  id, material_id, total_price, quantity, unit, price_per_base_unit, purchase_date
)
SELECT
  gen_random_uuid(),
  m.id,
  5000, 25, 'pcs', 200,
  CURRENT_DATE
FROM material m
WHERE m.name = 'Teh Celup';
