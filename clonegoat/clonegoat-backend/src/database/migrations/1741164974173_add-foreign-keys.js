exports.up = (pgm) => {
  pgm.sql(`
    ALTER TABLE products
      ADD CONSTRAINT products_category_id_fkey 
      FOREIGN KEY (category_id) 
      REFERENCES categories(id) 
      ON DELETE CASCADE;

    ALTER TABLE orders
      ADD CONSTRAINT orders_user_id_fkey 
      FOREIGN KEY (user_id) 
      REFERENCES users(id) 
      ON DELETE CASCADE;

    ALTER TABLE order_items
      ADD CONSTRAINT order_items_order_id_fkey 
      FOREIGN KEY (order_id) 
      REFERENCES orders(id) 
      ON DELETE CASCADE;

    ALTER TABLE order_items
      ADD CONSTRAINT order_items_product_id_fkey 
      FOREIGN KEY (product_id) 
      REFERENCES products(id) 
      ON DELETE CASCADE;
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    ALTER TABLE order_items DROP CONSTRAINT order_items_product_id_fkey;
    ALTER TABLE order_items DROP CONSTRAINT order_items_order_id_fkey;
    ALTER TABLE orders DROP CONSTRAINT orders_user_id_fkey;
    ALTER TABLE products DROP CONSTRAINT products_category_id_fkey;
  `);
};