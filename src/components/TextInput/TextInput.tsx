import {ChangeEvent, FC} from 'react';

import {Input, Label, ModalContent} from './styles';

interface TextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
}

const TextInput: FC<TextInputProps> = ({value, onChange, label, placeholder}) => {
  return (
    <ModalContent>
      {label && <Label>{label}</Label>}
      <Input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </ModalContent>
  );
};

export {TextInput};
