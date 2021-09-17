import IToggleFeatureRepository from '../repositories/IToggleFeatureRepository';
import ToggleFeature from './ToggleFeature';

export default class ToggleFeatureMysqlFactory {
  repository: any;

  constructor(repository: IToggleFeatureRepository) {
    this.repository = repository;
  }

  createToggle() {
    return new ToggleFeature();
  }
}
