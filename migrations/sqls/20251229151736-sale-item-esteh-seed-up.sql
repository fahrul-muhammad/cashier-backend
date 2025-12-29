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
  1,
  8000,
  2500
FROM sale s
JOIN product p ON p.product_name = 'Es Teh Manis'
LIMIT 1;
