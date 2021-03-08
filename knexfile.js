export const development = {
  client: 'pg',
  connection: 'postgres://localhost:5432/',
  migrations: {
    directory: "./databaseOperations/migrations"
  },
  seeds: {
    directory: "./databaseOperations/seeds"
  },
  useNullAsDefault: true
};
export const testing = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./databaseOperations/migrations"
  },
  seeds: {
    directory: "./databaseOperations/seeds"
  }
};
export const production = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  ssl: true,
  pool: {
    min: 2,
    max: 10
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./databaseOperations/migrations"
  },
  seeds: {
    directory: "./databaseOperations/seeds"
  }
};
