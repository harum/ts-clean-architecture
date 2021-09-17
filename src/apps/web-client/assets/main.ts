import './style.css';
import ToggleFeatureLocalStorageRepository from '../../../lib/toggle/repositories/ToggleFeatureLocalStorageRepository';
import CreateAndGetToggleFeature from '../../../lib/toggle/useCases/CreateAndGetToggleFeature';

async function initialize() {
  const repo = new ToggleFeatureLocalStorageRepository();

  const createAndGetToggleFeature = new CreateAndGetToggleFeature(repo);
  createAndGetToggleFeature.perform('red-header');
  createAndGetToggleFeature.perform('red-footer');
}

initialize();
