require('dotenv').config();

const paths = {
  production: {
    entities: ['./dist/modules/**/entities/*.js'],
    migrations: ['./dist/database/migrations/*.js'],
    cli: {
      migrationsDir: './dist/database/migrations',
    },
  },
  development: {
    entities: ['./src/modules/**/entities/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
  },
  test: {
    entities: ['./src/modules/**/entities/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
  },
};

module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: paths[process.env.NODE_ENV].entities,
  migrations: paths[process.env.NODE_ENV].migations,
  cli: {
    migrationsDir: paths[process.env.NODE_ENV].migrationsDir,
  },
};
