import React, {ReactNode} from 'react';

import {FiX} from 'react-icons/fi';

import {SimpleModal} from '@models/common.models';
import {Separator} from '@components/Separator/Separator';
import {ModalOverlay, ModalContainer, CloseButton, Header, Title} from './styles';

interface ModalProps extends SimpleModal {
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({title, isOpen, onClose, children}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContainer isOpen={isOpen}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>
            <FiX size={24} />
          </CloseButton>
        </Header>
        <Separator margin={14} />
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export {Modal};
