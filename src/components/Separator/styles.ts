import styled from 'styled-components';

export const Container = styled.div<{
  width: number;
  height: number;
  color: string;
  margin: number;
  opacity: number;
}>`
  width: ${props => props.width}%;
  height: ${props => props.height}px;
  margin: ${props => props.margin}px 0;
  background-color: ${props => props.color};
  opacity: ${props => props.opacity};
`;
