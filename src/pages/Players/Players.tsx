import React from 'react';

import {useTranslation} from 'react-i18next';

import {Separator} from '@components/Separator/Separator';
import {Button} from '@components/Button/Button';
import {Container, Header, Footer, Title, Content} from './styles';

interface PlayersProps {
  startVoting: () => void;
  resetVoting: () => void;
  hasVoting: boolean;
}

const Players: React.FC<PlayersProps> = ({startVoting, resetVoting, hasVoting}) => {
  const [t] = useTranslation();

  return (
    <Container>
      <Header>
        <Title>{t('players')}</Title>
      </Header>
      <Separator />
      <Content></Content>
      <Footer>
        <Button
          text={hasVoting ? t('reset') : t('start')}
          onClick={() => (hasVoting ? resetVoting() : startVoting())}
        />
      </Footer>
    </Container>
  );
};

export {Players};
