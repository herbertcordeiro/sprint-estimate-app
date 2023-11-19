import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_ACTIVE};
`;

export const Text = styled.h1`
  color: ${({ theme }) => theme.COLORS.LIGHT_ACTIVE};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
