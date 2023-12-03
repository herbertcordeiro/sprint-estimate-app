import {CSSProperties, ChangeEvent, FC} from 'react';

import {Input, Label, ModalContent} from './styles';

interface TextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  style?: CSSProperties;
  disabled?: boolean;
}

const TextInput: FC<TextInputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  style,
  disabled = false,
}) => {
  return (
    <ModalContent>
      {label && <Label>{label}</Label>}
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        disabled={disabled}
      />
    </ModalContent>
  );
};

export {TextInput};
