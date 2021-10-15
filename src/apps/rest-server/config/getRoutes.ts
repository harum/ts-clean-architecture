import ToggleController from '../controllers/ToggleController';
import ToggleFeatureMysqlRepository from '../../../lib/toggle/repositories/ToggleFeatureMysqlRepository';

function getRoutes(connection: any) {
  const repo = new ToggleFeatureMysqlRepository(connection);
  const toggleController: ToggleController = new ToggleController(repo);

  const routes = [
    {
      method: 'GET',
      path: '/toggles',
      handler: toggleController.index.bind(toggleController),
    },
    {
      method: 'GET',
      path: '/toggles/{id}',
      handler: toggleController.show.bind(toggleController),
    },
  ];

  return routes;
}

export default getRoutes;
