import React from 'react';

import {useTranslation} from 'react-i18next';

import Error404 from 'assets/images/error404.svg';
import {Container, Text} from './styles';

const ErrorPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <Container>
      <img src={Error404} height={600} />
      <Text>{t('page-not-found')}</Text>
    </Container>
  );
};

export {ErrorPage};
