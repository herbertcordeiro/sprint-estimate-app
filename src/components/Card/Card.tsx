import React from 'react';

import {FiTrash, FiEdit} from 'react-icons/fi';

import {theme} from '@styles/theme';
import {StoryStatus} from '@models/common.models';
import {CardContent, Container, Icons, TagStatus, Title} from './styles';

interface CardProps {
  title: string;
  status: StoryStatus;
  estimate?: number;
}

const Card: React.FC<CardProps> = ({status, title}) => {
  return (
    <Container>
      <TagStatus status={status} />
      <CardContent>
        <Title>{title}</Title>
        <Icons>
          <FiTrash size={18} color={theme.COLORS.SECONDARY_GRAY} />
          <FiEdit size={18} color={theme.COLORS.SECONDARY_GRAY} />
        </Icons>
      </CardContent>
    </Container>
  );
};

export {Card};
