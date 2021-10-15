import ToggleFeature from '../entities/ToggleFeature';
import IToggleFeatureRepository from '../repositories/IToggleFeatureRepository';

export default class GetToggleFeatures {
  repo: IToggleFeatureRepository;

  constructor(repo: IToggleFeatureRepository) {
    this.repo = repo;
  }

  async perform(limit = 10): Promise<Array<ToggleFeature>> {
    const toggles = await this.repo.findAll(limit);
    console.log(toggles);

    return toggles;
  }
}
