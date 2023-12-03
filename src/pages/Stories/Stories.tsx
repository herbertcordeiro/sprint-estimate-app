import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {useQuery} from 'react-query';

import {theme} from '@styles/theme';
import {StoryStatus, Tab} from '@models/common.models';
import {StoryService} from '@services/StoryService';
import {IStory} from '@interfaces/IStory';
import {Tabs} from '@components/Tabs/Tabs';
import {Separator} from '@components/Separator/Separator';
import {Button} from '@components/Button/Button';
import {TextInput} from '@components/TextInput/TextInput';
import {Card} from '@components/Card/Card';
import {CreateStoryModal} from '@pages/Modals/CreateStoryModal/CreateStoryModal';
import {Container, Footer, Header, InviteLabel, TabsContainer, TabsContent, Title} from './styles';

interface StoriesProps {
  inviteId: string;
  roomId?: number;
}

const Stories: React.FC<StoriesProps> = ({inviteId, roomId = 1}) => {
  const [t] = useTranslation();
  const invite = `http://localhost:3000/room/${inviteId}`;
  const [createStoryModalVisible, setCreateStoryModalVisible] = useState<boolean>(false);
  const {data, isLoading} = useQuery('stories-list', () =>
    StoryService.getAllByRoomId(roomId).then(resp => resp.data),
  );
  const tabs: Tab[] = [
    {
      label: `${t('all')} (${countByStatus(undefined)})`,
      content: getContentByStatus(undefined),
    },
    {
      label: `${t('active')} (${countByStatus(StoryStatus.ACTIVE)})`,
      content: getContentByStatus(StoryStatus.ACTIVE),
    },
    {
      label: `${t('completed')} (${countByStatus(StoryStatus.COMPLETED)})`,
      content: getContentByStatus(StoryStatus.COMPLETED),
    },
  ];

  function countByStatus(status) {
    if (status === undefined) {
      return data ? data.length : 0;
    }
    return data ? data.filter((story: IStory) => story.status === status).length : 0;
  }

  function getContentByStatus(status?: StoryStatus) {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    let filteredStories;

    if (!status) {
      filteredStories = data;
    } else {
      filteredStories = data.filter((story: IStory) => story.status === status);
    }

    return (
      <TabsContent>
        {filteredStories?.map(story => (
          <Card
            key={story.id}
            status={story.status}
            title={story.description}
            estimate={story.estimate}
          />
        ))}
      </TabsContent>
    );
  }

  return (
    <Container>
      <Header>
        <Title>{t('stories')}</Title>
        <Button
          text={t('add-new')}
          width={'80px'}
          height={'36px'}
          fontSize={'16px'}
          onClick={() => setCreateStoryModalVisible(!createStoryModalVisible)}
        />
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
      <CreateStoryModal
        isOpen={createStoryModalVisible}
        onClose={() => setCreateStoryModalVisible(!createStoryModalVisible)}
      />
    </Container>
  );
};

export {Stories};
