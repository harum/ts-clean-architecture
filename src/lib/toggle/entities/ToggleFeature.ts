import ToggleAble from './ToggleAble';
import TogglePlatform from './TogglePlatform';
import ToggleAbleFeature from './ToggleAbleFeature';

export default class ToggleFeature implements ToggleAbleFeature {
  #platforms = new Map();
  feature: string;

  constructor(feature: string) {
    this.feature = feature;
  }

  active(platform: string): boolean {
    return true;
  }

  toggle(platform: string): ToggleAble {
    return this.#platforms.get(platform);
  }

  on(platform: string): ToggleAble {
    return this.#platforms.get(platform);
  }

  off(platform: string): ToggleAble {
    return this.#platforms.get(platform);
  }

  addPlatform(togglePlatform: TogglePlatform) {
    this.#platforms.set(togglePlatform.platform, togglePlatform);
  }

  deletePlatform(togglePlatform: TogglePlatform) {
    this.#platforms.delete(togglePlatform.platform);
  }

  toString() {
    return (
      'ToggleFeature{' +
      `feature: ${this.feature}` +
      `, platforms: ${this.#platforms}` +
      '}'
    );
  }
}
