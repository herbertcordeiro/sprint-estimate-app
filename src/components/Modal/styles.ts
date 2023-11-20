import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK_OPACITY};
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ModalContainer = styled.div`
  width: 630px;
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
  padding: 20px;
  border-radius: 12px;
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  color: inherit;
`;
