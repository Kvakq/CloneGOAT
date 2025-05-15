exports.up = (pgm) => {
  pgm.sql(`
    ALTER TABLE users
      ALTER COLUMN username SET NOT NULL,
      ALTER COLUMN email SET NOT NULL,
      ALTER COLUMN password SET NOT NULL;

    ALTER TABLE categories
      ALTER COLUMN name SET NOT NULL;

    ALTER TABLE products
      ALTER COLUMN name SET NOT NULL,
      ALTER COLUMN price SET NOT NULL,
      ALTER COLUMN category_id SET NOT NULL;

    ALTER TABLE orders
      ALTER COLUMN user_id SET NOT NULL,
      ALTER COLUMN status SET NOT NULL,
      ALTER COLUMN created_at SET NOT NULL;

    ALTER TABLE order_items
      ALTER COLUMN order_id SET NOT NULL,
      ALTER COLUMN product_id SET NOT NULL,
      ALTER COLUMN quantity SET NOT NULL;
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    ALTER TABLE users
      ALTER COLUMN username DROP NOT NULL,
      ALTER COLUMN email DROP NOT NULL,
      ALTER COLUMN password DROP NOT NULL,
      ALTER COLUMN role DROP NOT NULL;

    ALTER TABLE categories
      ALTER COLUMN name DROP NOT NULL;

    ALTER TABLE products
      ALTER COLUMN name DROP NOT NULL,
      ALTER COLUMN price DROP NOT NULL,
      ALTER COLUMN category_id DROP NOT NULL;

    ALTER TABLE orders
      ALTER COLUMN user_id DROP NOT NULL,
      ALTER COLUMN status DROP NOT NULL,
      ALTER COLUMN created_at DROP NOT NULL;

    ALTER TABLE order_items
      ALTER COLUMN order_id DROP NOT NULL,
      ALTER COLUMN product_id DROP NOT NULL,
      ALTER COLUMN quantity DROP NOT NULL;
  `);
};