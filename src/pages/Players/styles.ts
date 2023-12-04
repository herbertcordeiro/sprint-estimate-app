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

export const Content = styled.div`
  flex-grow: 1;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 30px;
`;
