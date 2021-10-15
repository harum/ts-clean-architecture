import ToggleFeature from '../entities/ToggleFeature';

export default interface IToggleFeatureRepository {
  findAll: (limit: number) => Promise<Array<ToggleFeature>>;
  find: (feature: string) => Promise<ToggleFeature>;
  save: (toggleFeature: ToggleFeature) => Promise<ToggleFeature>;
  // delete: (toggleFeature: ToggleFeature) => Promise<boolean>;
}
