import Toggle from './Toggle';
import TogglePlatform from './TogglePlatform';

describe('TogglePlatform', () => {
  describe('When initialize the class', () => {
    it('should be a Toggle', () => {
      const toggle = new TogglePlatform('mobile_web');
      expect(toggle instanceof Toggle).toBe(true);
    });

    it('should be able to specify platform', () => {
      const toggle = new TogglePlatform('mobile_web');
      expect(toggle.platform).toBe('mobile_web');
    });
  });

  describe('When toString method is called', () => {
    it('should return toggle platform info', () => {
      const toggle = new TogglePlatform('mobile_web');
      expect(toggle.toString()).toMatchSnapshot();
    });
  });
});
