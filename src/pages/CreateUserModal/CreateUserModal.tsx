import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';

import {localStorageService} from '@services/localStorage.service';
import {showToast} from '@utils/toastUtils';
import {ButtonType, SimpleModal} from '@models/common.models';
import {Modal} from '@components/Modal/Modal';
import {TextInput} from '@components/TextInput/TextInput';
import {Button} from '@components/Button/Button';
import {ModalOptions} from './styles';

const CreateUserModal: React.FC<SimpleModal> = ({isOpen, onClose}) => {
  const [t] = useTranslation();
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSaveUser = async () => {
    if (inputValue) {
      const user = {
        id: null,
        name: inputValue,
      };

      await localStorageService.setItem('user', user);
      showToast(t('user-created'), 'success');
      onClose();
    }
  };

  const onCloseModal = () => {
    onClose();
    setInputValue('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal} title={t('lets-start')}>
      <TextInput
        value={inputValue}
        label={t('name')}
        onChange={handleInputChange}
        placeholder={t('enter-your-name')}
      />
      <ModalOptions>
        <Button text={t('send')} width={'140px'} onClick={handleSaveUser} disabled={!inputValue} />
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

export {CreateUserModal};
