import React, {useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';

import {localStorageService} from '@services/localStorage.service';
import {ButtonType, Mode, User} from '@models/common.models';
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
  const [mode, setMode] = useState<Mode>();
  const [user, setUser] = useState<User>();

  const showCreateRoomOrUser = () => {
    setMode(Mode.Create);
    user ? setCreateRoomModalVisible(true) : setCreateUserModalVisible(true);
  };

  const showJoinRoomOrCreateUser = () => {
    setMode(Mode.Join);
    user ? setJoinRoomModalVisible(true) : setCreateUserModalVisible(true);
  };

  const handleExistingUser = () => {
    setCreateUserModalVisible(false);
    setTimeout(() => {
      mode === Mode.Create ? setCreateRoomModalVisible(true) : setJoinRoomModalVisible(true);
    }, 350);
  };

  useEffect(() => {
    const hasUser = localStorageService.getItem('user');
    if (hasUser) {
      setUser(hasUser);
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
      <CreateUserModal isOpen={createUserModalVisible && !user} onClose={handleExistingUser} />
      <JoinRoomModal isOpen={joinRoomModalVisible} onClose={() => setJoinRoomModalVisible(false)} />
      <CreateRoomModal
        isOpen={createRoomModalVisible}
        onClose={() => setCreateRoomModalVisible(false)}
      />
    </Container>
  );
};

export {Home};
