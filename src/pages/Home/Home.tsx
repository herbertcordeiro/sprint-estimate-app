import React, {useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';

import {localStorageService} from '@services/localStorage.service';
import {ButtonType} from '@models/common.models';
import {Button} from '@components/Button/Button';
import {CreateUserModal} from '@pages/CreateUserModal/CreateUserModal';
import {CreateRoomModal} from '@pages/CreateRoomModal/CreateRoomModal';
import {JoinRoomModal} from '@pages/JoinRoomModal/JoinRoomModal';
import {Container, SubTitle, Title} from './styles';

const Home: React.FC = () => {
  const [t] = useTranslation();
  const [createUserModalVisible, setCreateUserModalVisible] = useState<boolean>(false);
  const [createRoomModalVisible, setCreateRoomModalVisible] = useState<boolean>(false);
  const [joinRoomModalVisible, setJoinRoomModalVisible] = useState<boolean>(false);
  const [storedUser, setStoredUser] = useState<any>(null);

  const openCreateUserModal = () => setCreateUserModalVisible(true);
  const openCreateRoomModal = () => setCreateRoomModalVisible(true);
  const openJoinRoomModal = () => setJoinRoomModalVisible(true);

  const showCreateRoomOrUser = () => (storedUser ? openCreateRoomModal() : openCreateUserModal());
  const showJoinRoomOrCreateUser = () => (storedUser ? openJoinRoomModal() : openCreateUserModal());

  useEffect(() => {
    const userFromStorage = localStorageService.getItem('user');
    if (userFromStorage) {
      setStoredUser(userFromStorage);
    }
  }, [createUserModalVisible]);

  return (
    <Container>
      <Title>{t('scrum-poker-for-agile-teams')}</Title>
      <SubTitle>{t('make-sprint-planning-easier')}</SubTitle>
      <Button text={t('create-room')} onClick={showCreateRoomOrUser} width={'460px'} />
      <Button
        type={ButtonType.Secondary}
        text={t('join-room')}
        onClick={showJoinRoomOrCreateUser}
        width={'460px'}
      />
      <CreateUserModal
        isOpen={createUserModalVisible && !storedUser}
        onClose={() => setCreateUserModalVisible(false)}
      />
      <CreateRoomModal
        isOpen={createRoomModalVisible}
        onClose={() => setCreateRoomModalVisible(false)}
      />
      <JoinRoomModal isOpen={joinRoomModalVisible} onClose={() => setJoinRoomModalVisible(false)} />
    </Container>
  );
};

export {Home};
