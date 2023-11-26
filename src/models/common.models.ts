export enum ButtonType {
  Primary,
  Secondary,
}

export enum Mode {
  Create,
  Join,
}

export type SimpleModal = {
  isOpen: boolean;
  onClose: () => void;
};

export type User = {
  id?: number;
  name: string;
};
