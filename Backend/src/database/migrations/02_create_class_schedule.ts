import knex from "knex";

export const up = async (Knex: knex) =>
  Knex.schema.createTable("class_schedules", (table) => {
    table.increments("id").primary();

    table.integer("week_day").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });

export const down = async (Knex: knex) => Knex.schema.dropTable("class_schedules");
