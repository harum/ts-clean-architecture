import ToggleFeature from './ToggleFeature';

describe('ToggleFeature', () => {
  describe('When initialize the class', () => {
    it('should be able to have feature', () => {
      const toggle = new ToggleFeature('show-red-header');
      expect(toggle.feature).toBe('show-red-header');
    });
  });
});
