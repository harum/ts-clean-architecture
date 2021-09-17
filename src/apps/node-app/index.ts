import mysql from 'mysql2/promise';
import ToggleFeatureMysqlRepository from '../../lib/toggle/repositories/ToggleFeatureMysqlRepository';
import CreateAndGetToggleFeature from '../../lib/toggle/useCases/CreateAndGetToggleFeature';

async function initialize() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test_toggle',
  });

  const repo = new ToggleFeatureMysqlRepository(connection);

  const createAndGetToggleFeature = new CreateAndGetToggleFeature(repo);
  createAndGetToggleFeature.perform('red-header');
  createAndGetToggleFeature.perform('red-footer');
}

initialize();
