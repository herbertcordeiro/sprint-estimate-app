import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  width: 100vw;
  height: 60px;
  padding: 0 230px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({theme}) => theme.COLORS.SECONDARY_GRAY};
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

export const Text = styled.p`
  color: ${({theme}) => theme.COLORS.GRAY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  font-size: 12px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
