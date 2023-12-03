import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100%;
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
  border: 1px solid ${({theme}) => theme.COLORS.SECONDARY_GRAY};
  border-radius: 16px;
  padding: 0 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  height: 36px;
`;

export const Title = styled.text`
  color: ${({theme}) => theme.COLORS.DARK_PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.EXTRABOLD};
  font-size: 20px;
  cursor: default;
`;

export const TabsContainer = styled.div`
  flex-grow: 1;
`;

export const TabsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  max-height: 386px;
  margin-bottom: 26px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 30px;
`;

export const InviteLabel = styled.text`
  color: ${({theme}) => theme.COLORS.PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  font-size: 16px;
  cursor: default;
`;
