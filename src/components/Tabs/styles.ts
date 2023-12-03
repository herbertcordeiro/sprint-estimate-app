import styled from 'styled-components';

export const TabHeader = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 4px;
`;

export const TabButton = styled.button<{isActived: boolean}>`
  border: none;
  height: 30px;
  margin: 7px 0;
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
  border-bottom: ${({theme, isActived}) =>
    isActived ? '1px solid' + theme.COLORS.PRIMARY_ACTIVE : 'none'};
`;

export const TextButton = styled.label<{isActived: boolean}>`
  color: ${({theme, isActived}) =>
    isActived ? theme.COLORS.PRIMARY_ACTIVE : theme.COLORS.DARK_PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  font-size: 15px;
`;

export const TabContent = styled.div``;

export const TabContainer = styled.div``;
