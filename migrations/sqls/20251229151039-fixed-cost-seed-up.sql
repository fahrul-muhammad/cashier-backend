INSERT INTO fixed_cost (
  id,
  name,
  total_cost,
  target_unit_per_month,
  created_at
)
VALUES
  (
    gen_random_uuid(),
    'Sewa Tempat',
    1500000,
    1500,
    now()
  ),
  (
    gen_random_uuid(),
    'Gaji Karyawan',
    2000000,
    1500,
    now()
  ),
  (
    gen_random_uuid(),
    'Internet',
    300000,
    1500,
    now()
  );
