import React, {ReactNode} from 'react';

import {FiX} from 'react-icons/fi';

import {Separator} from '@components/Separator/Separator';
import {ModalOverlay, ModalContainer, CloseButton, Header, Title} from './styles';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({title, isOpen, onClose, children}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer>
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
