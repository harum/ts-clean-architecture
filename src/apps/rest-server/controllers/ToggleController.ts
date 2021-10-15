import { Request, ResponseToolkit } from '@hapi/hapi';
import IToggleFeatureRepository from '../../../lib/toggle/repositories/IToggleFeatureRepository';
import CreateAndGetToggleFeature from '../../../lib/toggle/useCases/CreateAndGetToggleFeature';
import GetToggleFeatures from '../../../lib/toggle/useCases/GetToggleFeatures';
import GetToggleFeature from '../../../lib/toggle/useCases/GetToggleFeature';

export default class ToggleController {
  repo: IToggleFeatureRepository;

  constructor(repo: IToggleFeatureRepository) {
    this.repo = repo;
  }

  public async index(request: Request, h: ResponseToolkit): Promise<any> {
    const getToggleFeatures = new GetToggleFeatures(this.repo);
    const toggles = await getToggleFeatures.perform();

    return h.response({
      data: toggles.map((toggle) => toggle.toHash()),
    });
  }

  public async show(request: Request, h: ResponseToolkit): Promise<any> {
    const getToggleFeature = new GetToggleFeature(this.repo);
    const toggle = await getToggleFeature.perform(request.params.id);

    return h.response({
      data: toggle.toHash(),
    });
  }

  public async create(request: Request, h: ResponseToolkit): Promise<any> {
    const createAndGetToggleFeature = new CreateAndGetToggleFeature(this.repo);
    const toggle = await createAndGetToggleFeature.perform('red-header');

    return h.response({
      data: [toggle.toHash()],
    });
  }
}
