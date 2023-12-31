import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 80px 230px;
  background-color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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

export const Timer = styled.text`
  color: ${({theme}) => theme.COLORS.PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.EXTRABOLD};
  font-size: 20px;
  cursor: default;
`;

export const Cards = styled.div`
  flex-grow: 1;
`;

export const ContentTimer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;
