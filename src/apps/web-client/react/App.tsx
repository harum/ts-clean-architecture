import { useState, useEffect } from 'react'
import './App.css'
import ToggleFeatureLocalStorageRepository from '../../../lib/toggle/repositories/ToggleFeatureLocalStorageRepository';
import IToggleFeatureRepository from '../../../lib/toggle/repositories/IToggleFeatureRepository';
import GetToggleFeatures from '../../../lib/toggle/useCases/GetToggleFeatures';
import ToggleFeature from '../../../lib/toggle/entities/ToggleFeature';

function App() {
  let repo: IToggleFeatureRepository;
  let getToggleFeatures: GetToggleFeatures;

  const defaultToggles: Array<ToggleFeature> = [];
  const [toggles, setToggles] = useState(defaultToggles)

  async function fetchToggles() {
    const togglesResponse = await getToggleFeatures.perform();
    console.log(togglesResponse);
    setToggles(togglesResponse);
  }

  useEffect(() => {
    console.log('useEffect');
    repo = new ToggleFeatureLocalStorageRepository();
    getToggleFeatures = new GetToggleFeatures(repo);
    fetchToggles();
  }, []);

  return (
    <div className="Toggles">
      {
        toggles.map(toggle => (
          <p>{ toggle.feature }</p>
        ))
      }
    </div>
  )
}

export default App

