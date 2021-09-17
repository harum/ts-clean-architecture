import ToggleFeature from '../entities/ToggleFeature';
import TogglePlatform from '../entities/TogglePlatform';
import IToggleFeatureRepository from './IToggleFeatureRepository';

export default class ToggleFeatureLocalStorageRepository
  implements IToggleFeatureRepository
{
  async find(feature: string): Promise<ToggleFeature> {
    const rowInfo = JSON.parse(localStorage.getItem(feature) || '');
    const toggleFeature = new ToggleFeature();
    toggleFeature.buildFromHash(rowInfo);

    return toggleFeature;
  }

  async save(toggleFeature: ToggleFeature): Promise<ToggleFeature> {
    localStorage.setItem(toggleFeature.feature, toggleFeature.toString());

    return toggleFeature;
  }
}
