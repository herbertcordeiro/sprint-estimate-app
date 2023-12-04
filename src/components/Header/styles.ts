import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 80px;
  padding: 0 230px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.SECONDARY_GRAY};
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
`;

export const Logo = styled(Link)`
  text-decoration: none;
`;

export const UserInfo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 220px;
  height: 100%;
  gap: 16px;
  text-decoration: none;
`;

export const Icon = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
  background-color: ${({theme}) => theme.COLORS.PRIMARY_ACTIVE};
`;

export const UserName = styled.text`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.GRAY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;

export const Dropdown = styled.div`
  position: absolute;
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
  width: 140px;
  height: 48px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  z-index: 1;
  top: 72px;
  right: 230px;
`;

export const DropdownItem = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding-right: 12px;
  transition: background-color 0.35s;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_ACTIVE};
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background-color: ${({theme}) => theme.COLORS.DARK_LIGHT_ACTIVE};
  }
`;
