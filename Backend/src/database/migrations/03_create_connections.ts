import knex from "knex";

export const up = async (Knex: knex) =>
  Knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .timestamp("created_at")
      .defaultTo(Knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
  });

export const down = async (Knex: knex) => Knex.schema.dropTable("connections");
