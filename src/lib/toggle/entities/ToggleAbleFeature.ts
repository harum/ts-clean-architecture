import ToggleAble from './ToggleAble';

export default interface ToggleAbleFeature {
  active: (platform: string) => boolean;
  toggle: (platform: string) => ToggleAble;
  on: (platform: string) => ToggleAble;
  off: (platform: string) => ToggleAble;
}
