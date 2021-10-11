export default interface IToggle {
  active: boolean;
  toggle: () => void;
  on: () => void;
  off: () => void;
}
