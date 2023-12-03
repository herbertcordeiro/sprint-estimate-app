import {CSSProperties, ChangeEvent} from 'react';

import {Input, InputContent, Label, TextArea} from './styles';

interface TextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  style?: CSSProperties;
  disabled?: boolean;
  isTextArea?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  style,
  disabled = false,
  isTextArea = false,
}) => {
  return (
    <InputContent>
      {label && <Label>{label}</Label>}
      {isTextArea ? (
        <TextArea
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={style}
          disabled={disabled}
        />
      ) : (
        <Input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={style}
          disabled={disabled}
        />
      )}
    </InputContent>
  );
};

export {TextInput};
