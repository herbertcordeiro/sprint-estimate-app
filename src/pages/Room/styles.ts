import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
`;