/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255),
      email VARCHAR(255),
      password VARCHAR(255)
    );

    CREATE TABLE categories (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255)
    );

    CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      description TEXT,
      price INTEGER,
      category_id INTEGER
    );

    CREATE TABLE orders (
      id SERIAL PRIMARY KEY,
      user_id INTEGER,
      status VARCHAR(255),
      created_at TIMESTAMP
    );

    CREATE TABLE order_items (
      id SERIAL PRIMARY KEY,
      order_id INTEGER,
      product_id INTEGER,
      quantity INTEGER
    );
  `);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE IF EXISTS order_items;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS users;
  `);
};
