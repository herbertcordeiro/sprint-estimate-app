import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 80px;
  padding: 0 230px;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.SECONDARY_GRAY};
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
`;
