import React, {useEffect} from 'react';

import {useNavigate, useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {LocalStorageService} from '@services/LocalStorageService';
import {Container} from './styles';

const Room: React.FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [t] = useTranslation();

  useEffect(() => {
    const fetchUser = async () => {
      const hasUser = await LocalStorageService.getItem('user');
      if (!hasUser) {
        navigate('/');
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <Container>
      <h1>Room: {id}</h1>
    </Container>
  );
};

export {Room};
