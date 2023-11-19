import React from 'react';

import {useTranslation} from 'react-i18next';

import {Container, Text} from './styles';

const Home: React.FC = () => {
  const [t] = useTranslation();

  return (
    <Container>
      <Text>{t('sprint-estimate-title')}</Text>
    </Container>
  );
};

export {Home};
