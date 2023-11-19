import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
`;

export const Text = styled.text`
  font-size: 28px;
  margin-top: 30px;
  color: ${({theme}) => theme.COLORS.DARK_PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  text-transform: uppercase;
`;
