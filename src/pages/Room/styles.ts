import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 80px 230px;
  background-color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
`;
