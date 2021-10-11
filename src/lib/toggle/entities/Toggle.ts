import IToggle from './IToggle';

export default class Toggle implements IToggle {
  #active: boolean;

  constructor(active = false) {
    this.#active = active;
  }

  get active(): boolean {
    return this.#active;
  }

  toggle(): void {
    this.#active = !this.#active;
  }

  on(): void {
    this.#active = true;
  }

  off(): void {
    this.#active = false;
  }
}
