import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {ButtonType, SimpleModal} from '@models/common.models';
import {Modal} from '@components/Modal/Modal';
import {TextInput} from '@components/TextInput/TextInput';
import {Button} from '@components/Button/Button';
import {ModalOptions} from './styles';

const CreateRoomModal: React.FC<SimpleModal> = ({isOpen, onClose}) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSaveRoom = () => {
    if (inputValue) {
      onClose();
      navigate('room');
    }
  };

  const onCloseModal = () => {
    onClose();
    setInputValue('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal} title={t('create-new-room')}>
      <TextInput
        value={inputValue}
        label={t('room-name')}
        onChange={handleInputChange}
        placeholder={t('enter-room-name')}
      />
      <ModalOptions>
        <Button
          text={t('create')}
          width={'140px'}
          onClick={handleSaveRoom}
          disabled={!inputValue}
        />
        <Button
          text={t('cancel')}
          width={'140px'}
          onClick={onCloseModal}
          type={ButtonType.Secondary}
        />
      </ModalOptions>
    </Modal>
  );
};

export {CreateRoomModal};
