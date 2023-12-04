import React, {useEffect, useState} from 'react';

import {FiUser} from 'react-icons/fi';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {User} from '@models/common.models';
import {LocalStorageService} from '@services/LocalStorageService';
import SprintEstimate from 'assets/images/sprintestimate.svg';
import {Container, Dropdown, DropdownItem, Icon, Logo, UserInfo, UserName} from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownVisible(prev => !prev);
  };

  const handleLogout = () => {
    LocalStorageService.removeItem('user');
    LocalStorageService.removeItem('timer');
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    const hasUser = LocalStorageService.getItem('user');
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
        <UserInfo to={'#'} onClick={handleToggleDropdown}>
          <Icon>
            <FiUser size={28} />
          </Icon>
          <UserName>{user.name}</UserName>
          {isDropdownVisible && (
            <Dropdown>
              <DropdownItem to={'#'} onClick={handleLogout}>
                {t('logout')}
              </DropdownItem>
            </Dropdown>
          )}
        </UserInfo>
      )}
    </Container>
  );
};

export {Header};
