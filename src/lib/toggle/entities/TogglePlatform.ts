import Toggle from './Toggle';
import TogglePlatformHash from './TogglePlatformHash';

export default class TogglePlatform extends Toggle {
  platform: string;

  constructor(platform = '') {
    super(false);
    this.platform = platform;
  }

  buildFromHash(platformHash: TogglePlatformHash) {
    this.platform = platformHash.platform;
    if (platformHash.active) {
      this.on();
    } else {
      this.off();
    }
  }

  toHash(): TogglePlatformHash {
    return {
      platform: this.platform,
      active: this.active,
    };
  }

  toString(): string {
    return JSON.stringify(this.toHash());
  }
}
