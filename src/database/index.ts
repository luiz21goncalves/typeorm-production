import { createConnection, getConnectionOptions } from 'typeorm';

export async function createDatabaseConnection() {
  const options = await getConnectionOptions();

  if (process.env.NODE_ENV === 'test') {
    Object.assign(options, {
      database: 'tests',
    });
  }

  return createConnection(options);
}
