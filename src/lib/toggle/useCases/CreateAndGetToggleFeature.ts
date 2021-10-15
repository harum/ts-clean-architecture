import ToggleFeature from '../entities/ToggleFeature';
import TogglePlatform from '../entities/TogglePlatform';
import IToggleFeatureRepository from '../repositories/IToggleFeatureRepository';

export default class CreateAndGetToggleFeature {
  repo: IToggleFeatureRepository;

  constructor(repo: IToggleFeatureRepository) {
    this.repo = repo;
  }

  async perform(feature: string): Promise<ToggleFeature> {
    let toggle = new ToggleFeature();
    toggle.feature = feature;

    const togglePlatform = new TogglePlatform();
    togglePlatform.platform = 'dweb';
    togglePlatform.on();
    toggle.addPlatform(togglePlatform);
    toggle = await this.repo.save(toggle);

    // eslint-disable-next-line
    console.log(toggle.id);
    console.log(toggle.active('dweb'));
    console.log(toggle.toString());

    toggle = await this.repo.find(feature);
    // eslint-disable-next-line
    console.log(toggle.id);
    console.log(toggle.active('dweb'));
    console.log(toggle.toString());

    return toggle;
  }
}
