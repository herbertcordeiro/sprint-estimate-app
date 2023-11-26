export enum ButtonType {
  Primary,
  Secondary,
}

export type SimpleModal = {
  isOpen: boolean;
  onClose: () => void;
};
