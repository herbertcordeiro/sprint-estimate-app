export enum ButtonType {
  Primary,
  Secondary,
}

export enum Mode {
  Create,
  Join,
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum StoryStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export type SimpleModal = {
  isOpen: boolean;
  onClose: () => void;
};

export type User = {
  id?: number;
  name: string;
};

export type Tab = {
  label: string;
  content: React.ReactNode;
};
