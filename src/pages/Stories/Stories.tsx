import React from 'react';

import {useTranslation} from 'react-i18next';

import {theme} from '@styles/theme';
import {Tab} from '@models/common.models';
import {Tabs} from '@components/Tabs/Tabs';
import {Separator} from '@components/Separator/Separator';
import {Button} from '@components/Button/Button';
import {TextInput} from '@components/TextInput/TextInput';
import {Container, Footer, Header, InviteLabel, TabsContainer, Title} from './styles';

interface StoriesProps {
  inviteId: string;
}

const Stories: React.FC<StoriesProps> = ({inviteId}) => {
  const [t] = useTranslation();
  const invite = `http://localhost:3000/room/${inviteId}`;
  const tabs: Tab[] = [
    {label: 'all', content: <div>Tab 1</div>},
    {label: 'active', content: <div>Tab 2</div>},
    {label: 'completed', content: <div>Tab 3</div>},
  ];

  return (
    <Container>
      <Header>
        <Title>{t('stories')}</Title>
        <Button text={t('add-new')} width={'80px'} height={'36px'} fontSize={'16px'} />
      </Header>
      <Separator />
      <TabsContainer>
        <Tabs tabs={tabs} />
      </TabsContainer>
      <Footer>
        <InviteLabel>{t('invite-teammate')}</InviteLabel>
        <TextInput
          value={invite}
          onChange={() => {}}
          style={{borderWidth: 1, height: 36, fontFamily: theme.FONTS.REGULAR}}
          disabled
        />
      </Footer>
    </Container>
  );
};

export {Stories};
