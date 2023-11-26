import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme, isOpen}) => (isOpen ? theme.COLORS.DARK_OPACITY : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
  pointer-events: ${({isOpen}) => (isOpen ? 'auto' : 'none')};
  transition: background-color 0.4s ease, opacity 0.4s ease;
`;

export const ModalContainer = styled.div<{isOpen: boolean}>`
  width: 630px;
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
  padding: 20px;
  border-radius: 12px;
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
  animation: ${({isOpen}) => (isOpen ? fadeIn : 'none')} 0.4s ease;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  color: ${({theme}) => theme.COLORS.DARK_PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.EXTRABOLD};
  font-size: 26px;
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  color: inherit;
`;
