INSERT INTO sale_item (
  id,
  sale_id,
  product_id,
  quantity,
  selling_price,
  hpp_at_sale
)
SELECT
  gen_random_uuid(),
  s.id,
  p.id,
  2,
  18000,
  8500
FROM sale s
JOIN product p ON p.product_name = 'Es Kopi Susu'
LIMIT 1;
