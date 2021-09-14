import Toggle from './Toggle';

describe('Toggle', () => {
  describe('When initialize the class', () => {
    it('should have default active value', () => {
      const toggle = new Toggle();
      expect(toggle.active).toBe(false);
    });
  });

  describe('When toggle method is called', () => {
    it.each([
      [true, false],
      [false, true],
    ])('should update value from %p to %p', (input, result) => {
      const toggle = new Toggle(input);
      toggle.toggle();
      expect(toggle.active).toBe(result);
    });
  });

  describe('When on method is called', () => {
    it.each([
      [true, true],
      [false, true],
    ])('should update value from %p to %p', (input, result) => {
      const toggle = new Toggle(input);
      toggle.on();
      expect(toggle.active).toBe(result);
    });
  });

  describe('When off method is called', () => {
    it.each([
      [true, false],
      [false, false],
    ])('should update value from %p to %p', (input, result) => {
      const toggle = new Toggle(input);
      toggle.off();
      expect(toggle.active).toBe(result);
    });
  });
});
