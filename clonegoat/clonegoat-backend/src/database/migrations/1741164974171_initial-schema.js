/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  // Create Users table
  pgm.createTable("users", {
    user_id: { type: "serial", primaryKey: true },
    username: { type: "varchar(50)", notNull: true, unique: true },
    email: { type: "varchar(100)", notNull: true, unique: true },
    password_hash: { type: "varchar(255)", notNull: true },
    full_name: { type: "varchar(100)" },
    address: { type: "text" },
    phone_number: { type: "varchar(20)" },
    role: {
      type: "text",
      notNull: true,
      default: "customer",
      check: "role IN ('customer', 'admin')",
    },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  // Create Categories table
  pgm.createTable("categories", {
    category_id: { type: "serial", primaryKey: true },
    category_name: { type: "varchar(100)", notNull: true },
    description: { type: "text" },
  });

  // Create Brands table
  pgm.createTable("brands", {
    brand_id: { type: "serial", primaryKey: true },
    brand_name: { type: "varchar(100)", notNull: true },
    description: { type: "text" },
  });

  // Create Products table
  pgm.createTable("products", {
    product_id: { type: "serial", primaryKey: true },
    product_name: { type: "varchar(200)", notNull: true },
    category_id: {
      type: "integer",
      references: "categories",
      onDelete: "CASCADE",
    },
    brand_id: {
      type: "integer",
      references: "brands",
      onDelete: "CASCADE",
    },
    description: { type: "text" },
    price: { type: "decimal(10,2)", notNull: true },
    stock_quantity: { type: "integer", default: 0 },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  // Create ProductImages table
  pgm.createTable("product_images", {
    image_id: { type: "serial", primaryKey: true },
    product_id: {
      type: "integer",
      references: "products",
      onDelete: "CASCADE",
    },
    image_url: { type: "varchar(255)", notNull: true },
    is_primary: { type: "boolean", default: false },
  });

  // Create Orders table
  pgm.createTable("orders", {
    order_id: { type: "serial", primaryKey: true },
    user_id: {
      type: "integer",
      references: "users",
      onDelete: "CASCADE",
    },
    order_status: {
      type: "text",
      notNull: true,
      default: "pending",
      check:
        "order_status IN ('pending', 'processing', 'shipped', 'delivered', 'canceled')",
    },
    total_amount: { type: "decimal(10,2)", notNull: true },
    shipping_address: { type: "text" },
    placed_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  // Create OrderDetails table
  pgm.createTable("order_details", {
    order_detail_id: { type: "serial", primaryKey: true },
    order_id: {
      type: "integer",
      references: "orders",
      onDelete: "CASCADE",
    },
    product_id: {
      type: "integer",
      references: "products",
      onDelete: "CASCADE",
    },
    quantity: { type: "integer", notNull: true },
    price: { type: "decimal(10,2)", notNull: true },
  });

  // Create ProductReviews table
  pgm.createTable("product_reviews", {
    review_id: { type: "serial", primaryKey: true },
    product_id: {
      type: "integer",
      references: "products",
      onDelete: "CASCADE",
    },
    user_id: {
      type: "integer",
      references: "users",
      onDelete: "CASCADE",
    },
    rating: {
      type: "integer",
      notNull: true,
      check: "rating BETWEEN 1 AND 5",
    },
    comment: { type: "text" },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  // Drop tables in reverse order to handle dependencies
  pgm.dropTable("product_reviews");
  pgm.dropTable("order_details");
  pgm.dropTable("orders");
  pgm.dropTable("product_images");
  pgm.dropTable("products");
  pgm.dropTable("brands");
  pgm.dropTable("categories");
  pgm.dropTable("users");
};
