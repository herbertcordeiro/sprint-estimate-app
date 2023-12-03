import {Link} from 'react-router-dom';
import styled from 'styled-components';

interface StyledLinkButtonProps {
  styles: {
    type: string;
    backgroundColor: string;
    color: string;
    border: string;
  };
  height: string;
  width: string;
  disabled?: boolean;
  fontSize?: string;
}

export const StyledLinkButton = styled(Link)<StyledLinkButtonProps>`
  height: ${props => props.height};
  width: ${props => props.width};
  padding: 14px 0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.styles.backgroundColor};
  color: ${props => props.styles.color};
  border: ${props => props.styles.border};
  border-radius: 6px;
  font-family: ${({theme}) => theme.FONTS.LIGHT};
  font-size: ${props => (props.fontSize ? props.fontSize : '18px')};
  &:hover {
    opacity: 0.8;
  }
`;
