import ToggleFeature from '../entities/ToggleFeature';

export default interface IToggleFeatureRepository {
  // findAll: () => Promise<Array<ToggleFeature>>;
  find: (feature: string) => Promise<ToggleFeature>;
  save: (toggleFeature: ToggleFeature) => Promise<ToggleFeature>;
  // delete: (toggleFeature: ToggleFeature) => Promise<boolean>;
}
