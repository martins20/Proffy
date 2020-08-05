import knex from "knex";

export const up = async (Knex: knex) =>
  Knex.schema.createTable("classes", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });

export const down = async (Knex: knex) => Knex.schema.dropTable("classes");
