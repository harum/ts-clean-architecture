import Hapi from '@hapi/hapi';
import { Server } from '@hapi/hapi';
import mysql from 'mysql2/promise';
import getRoutes from './config/getRoutes';

export let server: Server;

export const init = async function (): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 4000,
    host: '0.0.0.0',
  });

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test_toggle',
  });

  server.route(getRoutes(connection));

  return server;
};

export const start = async function (): Promise<void> {
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
  return server.start();
};

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection');
  console.error(err);
  process.exit(1);
});
