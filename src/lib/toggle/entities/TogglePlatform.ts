import Toggle from './Toggle';

export default class TogglePlatform extends Toggle {
  #platform: string;

  constructor(platform: string) {
    super(false);
    this.#platform = platform;
  }

  get platform(): string {
    return this.#platform;
  }

  toString(): string {
    return (
      'TogglePlatform{' +
      `platform: ${this.#platform}` +
      `, active: ${this.active}` +
      '}'
    );
  }
}
