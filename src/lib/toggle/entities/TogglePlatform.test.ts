import Toggle from './Toggle';
import TogglePlatform from './TogglePlatform';

describe('TogglePlatform', () => {
  describe('When initialize the class', () => {
    it('should be a Toggle', () => {
      const toggle = new TogglePlatform('mobile_web');
      toggle.platform = 'mobile_web';
      expect(toggle instanceof Toggle).toBe(true);
    });

    it('should be able to specify platform', () => {
      const toggle = new TogglePlatform('mobile_web');
      expect(toggle.platform).toBe('mobile_web');
    });
  });

  describe('When buildFromHash method is called', () => {
    it('should be able to create toggle platform from hash', () => {
      const toggle = new TogglePlatform();
      toggle.buildFromHash({ platform: 'android', active: true });
      expect(toggle.platform).toBe('android');
      expect(toggle.active).toBe(true);
    });
  });

  describe('When toString method is called', () => {
    it('should return toggle platform info', () => {
      const toggle = new TogglePlatform('mobile_web');
      expect(toggle.toString()).toMatchSnapshot();
    });
  });

  describe('When toHash method is called', () => {
    it('should return toggle platform as hash', () => {
      const toggle = new TogglePlatform('mobile_web');
      expect(toggle.toHash()).toMatchSnapshot();
    });
  });
});
