export default interface ToggleAble {
  active: boolean;
  toggle: () => void;
  on: () => void;
  off: () => void;
}
