import TogglePlatform from './TogglePlatform';

export default interface ToggleAbleFeature {
  active: (platform: string) => boolean;
  toggle: (platform: string) => void;
  on: (platform: string) => void;
  off: (platform: string) => void;
  addPlatform: (togglePlatform: TogglePlatform) => void;
  deletePlatform: (platform: string) => void;
}
