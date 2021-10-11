import Toggle from './Toggle';
import DSTogglePlatform from './DSTogglePlatform';

export default class TogglePlatform extends Toggle {
  platform: string;

  constructor(platform = '') {
    super(false);
    this.platform = platform;
  }

  buildFromHash(platformHash: DSTogglePlatform) {
    this.platform = platformHash.platform;
    if (platformHash.active) {
      this.on();
    } else {
      this.off();
    }
  }

  toHash(): DSTogglePlatform {
    return {
      platform: this.platform,
      active: this.active,
    };
  }

  toString(): string {
    return JSON.stringify(this.toHash());
  }
}
