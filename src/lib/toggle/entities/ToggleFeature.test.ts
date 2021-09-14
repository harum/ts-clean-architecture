import ToggleFeature from './ToggleFeature';
import TogglePlatform from './TogglePlatform';

describe('ToggleFeature', () => {
  let toggleFeature: ToggleFeature;

  beforeEach(() => {
    toggleFeature = new ToggleFeature('test');
  });

  describe('When toggle feature is initialized', () => {
    it('should be able to have initial value', () => {
      expect(toggleFeature.toString()).toMatchSnapshot();
    });
  });

  describe('When targeted platform in not registered', () => {
    it('should stay off when toggle on the platform', () => {
      toggleFeature.on('mobile');
      expect(toggleFeature.active('mobile')).toBe(false);
    });

    it('should stay off when toggle off a platform', () => {
      toggleFeature.on('mobile');
      toggleFeature.off('mobile');
      expect(toggleFeature.active('mobile')).toBe(false);
    });

    it('should stay off when toggle a platform', () => {
      toggleFeature.toggle('mobile');
      expect(toggleFeature.active('mobile')).toBe(false);
    });
  });

  describe('When targeted platform is registered', () => {
    beforeEach(() => {
      toggleFeature.addPlatform(new TogglePlatform('mobile'));
    });

    it('should be able to toggle on the platform', () => {
      toggleFeature.on('mobile');
      expect(toggleFeature.active('mobile')).toBe(true);
    });

    it('should be able to toggle off the platform', () => {
      toggleFeature.on('mobile');
      toggleFeature.off('mobile');
      expect(toggleFeature.active('mobile')).toBe(false);
    });

    it('should be able to toggle the platform', () => {
      toggleFeature.toggle('mobile');
      expect(toggleFeature.active('mobile')).toBe(true);

      toggleFeature.toggle('mobile');
      expect(toggleFeature.active('mobile')).toBe(false);
    });
  });

  describe('When platform is more then one', () => {
    let platform1: TogglePlatform;
    let platform2: TogglePlatform;

    beforeEach(() => {
      platform1 = new TogglePlatform('desktop');
      platform2 = new TogglePlatform('mobile');

      toggleFeature.addPlatform(platform1);
      toggleFeature.addPlatform(platform2);
    });

    it('should be able to have correct platforms', () => {
      expect(toggleFeature.toString()).toMatchSnapshot();
      expect(toggleFeature.platforms.get('desktop')).toEqual(platform1);
      expect(toggleFeature.platforms.get('mobile')).toEqual(platform2);
    });

    it('should be able to delete platform', () => {
      toggleFeature.deletePlatform('mobile');
      expect(toggleFeature.toString()).toMatchSnapshot();
    });
  });
});
