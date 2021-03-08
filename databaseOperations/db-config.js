import knex from "knex";

import knexConfig from "../knexfile";

const dbEnv = process.env.DB_ENV || 'development'

export default knex(knexConfig[dbEnv]);
