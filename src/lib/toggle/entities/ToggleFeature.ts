import IToggle from './IToggle';
import TogglePlatform from './TogglePlatform';
import IToggleFeature from './IToggleFeature';
import IToggleFeatureRepository from '../repositories/IToggleFeatureRepository';
import DSToggleFeature from './DSToggleFeature';
import DSTogglePlatform from './DSTogglePlatform';

export default class ToggleFeature implements IToggleFeature {
  platforms = new Map<string, TogglePlatform>();
  feature: string;
  id: number;

  constructor(feature = '') {
    this.id = 0;
    this.feature = feature;
  }

  active(platform: string): boolean {
    const togglePlatform = this.platforms.get(platform);
    return (togglePlatform && togglePlatform.active) || false;
  }

  toggle(platform: string): void {
    const togglePlatform = this.platforms.get(platform);
    if (togglePlatform) {
      togglePlatform.toggle();
    }
  }

  on(platform: string): void {
    const togglePlatform = this.platforms.get(platform);
    if (togglePlatform) {
      togglePlatform.on();
    }
  }

  off(platform: string): void {
    const togglePlatform = this.platforms.get(platform);
    if (togglePlatform) {
      togglePlatform.off();
    }
  }

  addPlatform(togglePlatform: TogglePlatform): void {
    this.platforms.set(togglePlatform.platform, togglePlatform);
  }

  deletePlatform(platform: string): void {
    this.platforms.delete(platform);
  }

  buildFromHash(featureHash: DSToggleFeature) {
    this.feature = featureHash.feature;

    featureHash.platforms.forEach(
      ([key, platform]: [string, DSTogglePlatform]) => {
        const togglePlatform = new TogglePlatform(key);
        togglePlatform.buildFromHash(platform);
        this.addPlatform(togglePlatform);
      },
    );
  }

  toHash(): DSToggleFeature {
    const platformTupples: [string, DSTogglePlatform][] = [];
    for (const [key, value] of this.platforms.entries()) {
      platformTupples.push([key, value.toHash()]);
    }

    return {
      feature: this.feature,
      platforms: platformTupples,
    };
  }

  toString(): string {
    return JSON.stringify(this.toHash());
  }
}
