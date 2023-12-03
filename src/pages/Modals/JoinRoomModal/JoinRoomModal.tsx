import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useMutation} from 'react-query';

import {ButtonType, SimpleModal} from '@models/common.models';
import {IRoom} from '@interfaces/IRoom';
import {showToast} from '@utils/toastUtils';
import {RoomService} from '@services/RoomService';
import {LocalStorageService} from '@services/LocalStorageService';
import {Modal} from '@components/Modal/Modal';
import {TextInput} from '@components/TextInput/TextInput';
import {Button} from '@components/Button/Button';
import {ModalOptions} from './styles';

const JoinRoomModal: React.FC<SimpleModal> = ({isOpen, onClose}) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>('');
  const mutation = useMutation({
    mutationFn: (room: IRoom) => {
      return RoomService.getOneByInviteId(room.inviteId).then(resp => resp.data);
    },
    onSuccess(data: IRoom) {
      handleJoinRoom(data);
    },
    onError() {
      showToast(t('error-find-room'), 'error');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleJoinRoom = async (room: IRoom) => {
    await LocalStorageService.setItem('room', room);
    onCloseModal();
    navigate(`room/${room.inviteId}`);
  };

  const handleMutation = () => {
    if (inputValue) {
      mutation.mutate({
        inviteId: inputValue,
        name: '',
      });
    }
  };

  const onCloseModal = () => {
    onClose();
    setInputValue('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal} title={t('join-room')}>
      <TextInput
        value={inputValue}
        label={t('room-name')}
        onChange={handleInputChange}
        placeholder={t('enter-room-name')}
      />
      <ModalOptions>
        <Button
          text={t('join')}
          width={'140px'}
          onClick={handleMutation}
          disabled={!inputValue.length}
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

export {JoinRoomModal};
