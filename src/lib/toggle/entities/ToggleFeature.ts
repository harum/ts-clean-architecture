import ToggleAble from './ToggleAble';
import TogglePlatform from './TogglePlatform';
import ToggleAbleFeature from './ToggleAbleFeature';

export default class ToggleFeature implements ToggleAbleFeature {
  #platforms = new Map<string, TogglePlatform>();
  feature: string;

  constructor(feature: string) {
    this.feature = feature;
  }

  get platforms(): Map<string, TogglePlatform> {
    return this.#platforms;
  }

  get platformsString(): string {
    const results = [];
    for (const [_, platformToggle] of this.#platforms.entries()) {
      results.push(platformToggle.toString());
    }

    return results.join(', ');
  }

  active(platform: string): boolean {
    const togglePlatform = this.#platforms.get(platform);
    return (togglePlatform && togglePlatform.active) || false;
  }

  toggle(platform: string): void {
    const togglePlatform = this.#platforms.get(platform);
    if (togglePlatform) {
      togglePlatform.toggle();
    }
  }

  on(platform: string): void {
    const togglePlatform = this.#platforms.get(platform);
    if (togglePlatform) {
      togglePlatform.on();
    }
  }

  off(platform: string): void {
    const togglePlatform = this.#platforms.get(platform);
    if (togglePlatform) {
      togglePlatform.off();
    }
  }

  addPlatform(togglePlatform: TogglePlatform) {
    this.#platforms.set(togglePlatform.platform, togglePlatform);
  }

  deletePlatform(platform: string) {
    this.#platforms.delete(platform);
  }

  toString() {
    return (
      'ToggleFeature{' +
      `feature: ${this.feature}` +
      `, platforms: ${this.platformsString}` +
      '}'
    );
  }
}
