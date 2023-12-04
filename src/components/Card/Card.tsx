import React from 'react';

import {FiTrash, FiEdit} from 'react-icons/fi';

import {theme} from '@styles/theme';
import {StoryStatus} from '@models/common.models';
import {CardContent, Container, Icons, TagStatus, Title} from './styles';
import {Link} from 'react-router-dom';

interface CardProps {
  title: string;
  status: StoryStatus;
  estimate?: number;
  onClick?: () => void;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
}

const Card: React.FC<CardProps> = ({status, title, onClick, onClickEdit, onClickDelete}) => {
  return (
    <Container>
      <TagStatus status={status} />
      <CardContent>
        <Title>{title}</Title>
        <Icons>
          <Link onClick={onClickDelete} to={'#'}>
            <FiTrash size={18} color={theme.COLORS.SECONDARY_GRAY} />
          </Link>
          <Link onClick={onClickEdit} to={'#'}>
            <FiEdit size={18} color={theme.COLORS.SECONDARY_GRAY} />
          </Link>
        </Icons>
      </CardContent>
    </Container>
  );
};

export {Card};
