import ToggleFeature from '../entities/ToggleFeature';
import IToggleFeatureRepository from '../repositories/IToggleFeatureRepository';

export default class GetToggleFeature {
  repo: IToggleFeatureRepository;

  constructor(repo: IToggleFeatureRepository) {
    this.repo = repo;
  }

  async perform(feature: string): Promise<ToggleFeature> {
    const toggle = await this.repo.find(feature);
    console.log(toggle);

    return toggle;
  }
}
