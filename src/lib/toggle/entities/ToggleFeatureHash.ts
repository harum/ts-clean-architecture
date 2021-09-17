import TogglePlatformHash from './TogglePlatformHash';

type ToggleFeatureHash = {
  feature: string;
  platforms: [string, TogglePlatformHash][];
};

export default ToggleFeatureHash;
