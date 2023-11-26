import React, {useEffect, useState} from 'react';

import {FiUser} from 'react-icons/fi';

import {localStorageService} from '@services/localStorage.service';
import {User} from '@models/common.models';
import SprintEstimate from 'assets/images/sprintestimate.svg';
import {Container, Icon, Logo, UserInfo, UserName} from './styles';

const Header: React.FC = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const hasUser = localStorageService.getItem('user');
    if (hasUser) {
      setUser(hasUser);
    }
  }, []);

  return (
    <Container>
      <Logo to={'/'}>
        <img src={SprintEstimate} height={50} />
      </Logo>
      {user && (
        <UserInfo to={'/'}>
          <Icon>
            <FiUser size={28} />
          </Icon>
          <UserName>{user.name}</UserName>
        </UserInfo>
      )}
    </Container>
  );
};

export {Header};
