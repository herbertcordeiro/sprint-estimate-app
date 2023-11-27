import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {useMutation} from 'react-query';

import {showToast} from '@utils/toastUtils';
import {IUser} from '@interfaces/IUser';
import {LocalStorageService} from '@services/LocalStorageService';
import {UserService} from '@services/UserService';
import {ButtonType, SimpleModal, UserRole} from '@models/common.models';
import {Modal} from '@components/Modal/Modal';
import {TextInput} from '@components/TextInput/TextInput';
import {Button} from '@components/Button/Button';
import {ModalOptions} from './styles';

const CreateUserModal: React.FC<SimpleModal> = ({isOpen, onClose}) => {
  const [t] = useTranslation();
  const [inputValue, setInputValue] = useState<string>('');
  const mutation = useMutation({
    mutationFn: (user: IUser) => {
      return UserService.createUser(user).then(resp => resp.data);
    },
    onSuccess(data) {
      handleSaveUser(data);
    },
    onError() {
      showToast(t('error-creating-user'), 'error');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleSaveUser = async (user: IUser) => {
    await LocalStorageService.setItem('user', user);
    showToast(t('user-created'), 'success');
    onClose();
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
        <Button
          text={t('send')}
          width={'140px'}
          onClick={() => mutation.mutate({name: inputValue, role: UserRole.ADMIN})}
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

export {CreateUserModal};
