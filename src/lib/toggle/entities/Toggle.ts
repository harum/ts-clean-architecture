import ToggleAble from './ToggleAble';

export default class Toggle implements ToggleAble {
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
