import ToggleFeature from '../entities/ToggleFeature';
import TogglePlatform from '../entities/TogglePlatform';
import IToggleFeatureRepository from './IToggleFeatureRepository';

const localStorageKey = 'toggleFeatures';

export default class ToggleFeatureLocalStorageRepository
  implements IToggleFeatureRepository
{
  async findAll(limit = 10): Promise<Array<ToggleFeature>> {
    const rows = JSON.parse(localStorage.getItem(localStorageKey) || '[]');

    return rows.map((row: any) => {
      const toggleFeature = new ToggleFeature();
      toggleFeature.buildFromHash(row);

      return toggleFeature;
    });
  }

  async find(feature: string): Promise<ToggleFeature> {
    const rows = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
    const row = rows.find((toggle: any) => toggle.feature === feature);
    const toggleFeature = new ToggleFeature();
    toggleFeature.buildFromHash(row);

    return toggleFeature;
  }

  async save(toggleFeature: ToggleFeature): Promise<ToggleFeature> {
    const rows = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
    rows.push(toggleFeature.toHash());

    localStorage.setItem(localStorageKey, JSON.stringify(rows));

    return toggleFeature;
  }
}
