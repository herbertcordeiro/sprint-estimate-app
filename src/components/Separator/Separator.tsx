import React from 'react';

import {Container} from './styles';

interface SeparatorProps {
  widthPercentage?: number;
  height?: number;
  color?: string;
  margin?: number;
  opacity?: number;
}

const Separator: React.FC<SeparatorProps> = ({
  widthPercentage = 100,
  height = 1,
  color = ({theme}) => theme.COLORS.SECONDARY_GRAY,
  margin = 0,
  opacity = 1,
}) => {
  return (
    <Container
      width={widthPercentage}
      height={height}
      color={color}
      margin={margin}
      opacity={opacity}
    />
  );
};

export {Separator};
