import React from 'react';

import {ButtonType} from '@models/common.models';
import {StyledLinkButton} from './styles';

interface ButtonProps {
  height?: string;
  width?: string;
  text: string;
  fontSize?: string;
  type?: ButtonType;
  disabled?: boolean;
  route?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  height = 'auto',
  width = 'auto',
  text,
  type = ButtonType.Primary,
  disabled = false,
  route = '',
  fontSize,
  onClick,
}) => {
  const getButtonStyles = () => {
    switch (type) {
      case ButtonType.Secondary:
        return {
          backgroundColor: ({theme}) => theme.COLORS.LIGHT_ACTIVE,
          color: ({theme}) => theme.COLORS.PRIMARY_ACTIVE,
          border: ({theme}) => `2px solid ${theme.COLORS.PRIMARY_ACTIVE}`,
        };
      default:
        return {
          backgroundColor: ({theme}) => theme.COLORS.PRIMARY_ACTIVE,
          color: ({theme}) => theme.COLORS.LIGHT_ACTIVE,
          border: 'none',
        };
    }
  };

  const buttonStyles = getButtonStyles();

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledLinkButton
      to={route}
      styles={buttonStyles}
      width={width}
      height={height}
      disabled={disabled}
      fontSize={fontSize}
      onClick={handleButtonClick}
    >
      {text}
    </StyledLinkButton>
  );
};

export {Button};
