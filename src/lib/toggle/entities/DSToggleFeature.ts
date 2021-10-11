import DSTogglePlatform from './DSTogglePlatform';

type DSToggleFeature = {
  feature: string;
  platforms: [string, DSTogglePlatform][];
};

export default DSToggleFeature;
