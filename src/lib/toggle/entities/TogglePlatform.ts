import Toggle from './Toggle';

export default class TogglePlatform extends Toggle {
  platform: string;

  constructor(platform = '') {
    super(false);
    this.platform = platform;
  }

  buildFromHash(platformHash: { platform: string; active: boolean }) {
    this.platform = platformHash.platform;
    if (platformHash.active) {
      this.on();
    } else {
      this.off();
    }
  }

  toString(): string {
    return JSON.stringify(this.toHash());
  }

  toHash(): { platform: string; active: boolean } {
    return {
      platform: this.platform,
      active: this.active,
    };
  }
}
