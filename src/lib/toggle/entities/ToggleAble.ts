export default class ToggleAble {
  #active: boolean;

  constructor(active: boolean = false) {
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
