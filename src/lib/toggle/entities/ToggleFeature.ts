import ToggleAble from './ToggleAble';
import TogglePlatform from './TogglePlatform';
import ToggleAbleFeature from './ToggleAbleFeature';
import IToggleFeatureRepository from '../repositories/IToggleFeatureRepository';
import ToggleFeatureHash from './ToggleFeatureHash';
import TogglePlatformHash from './TogglePlatformHash';

export default class ToggleFeature implements ToggleAbleFeature {
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

  buildFromHash(featureHash: ToggleFeatureHash) {
    this.feature = featureHash.feature;

    featureHash.platforms.forEach(
      ([key, platform]: [string, TogglePlatformHash]) => {
        const togglePlatform = new TogglePlatform(key);
        togglePlatform.buildFromHash(platform);
        this.addPlatform(togglePlatform);
      },
    );
  }

  toHash(): ToggleFeatureHash {
    const platformTupples: [string, TogglePlatformHash][] = [];
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
