import knex from "knex";

export const up = async (Knex: knex) =>
  Knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });

export const down = async (Knex: knex) => Knex.schema.dropTable("users");
