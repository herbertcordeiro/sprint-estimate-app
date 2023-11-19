import React from 'react';

import {useTranslation} from 'react-i18next';

import {Button} from '@components/Button/Button';
import {ButtonType} from '@models/common.models';
import {Container, SubTitle, Title} from './styles';

const Home: React.FC = () => {
  const [t] = useTranslation();

  return (
    <Container>
      <Title>{t('scrum-poker-for-agile-teams')}</Title>
      <SubTitle>{t('make-sprint-planning-easier')}</SubTitle>
      <Button text={t('create-room')} route={'room'} width={'460px'} />
      <Button type={ButtonType.Secondary} text={t('join-room')} route={''} width={'460px'} />
    </Container>
  );
};

export {Home};
