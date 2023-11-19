import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
  background-color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
`;

export const Title = styled.text`
  font-size: 60px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.DARK_PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.EXTRABOLD};
  white-space: pre-line;
`;

export const SubTitle = styled.text`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.COLORS.GRAY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;
