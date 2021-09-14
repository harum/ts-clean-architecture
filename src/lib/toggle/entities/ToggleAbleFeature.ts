import ToggleAble from './ToggleAble';

export default interface ToggleAbleFeature {
  active: (platform: string) => boolean;
  toggle: (platform: string) => void;
  on: (platform: string) => void;
  off: (platform: string) => void;
}
