import styled from 'styled-components';

import {StoryStatus} from '@models/common.models';

export const Container = styled.div`
  display: flex;
  height: 100px;
  background-color: ${({theme}) => theme.COLORS.LIGHT_ACTIVE};
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.SECONDARY_GRAY};
`;

export const Title = styled.text`
  color: ${({theme}) => theme.COLORS.DARK_PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  font-size: 16px;
  cursor: default;
`;

export const TagStatus = styled.div<{status: StoryStatus}>`
  width: 12px;
  height: 100%;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background-color: ${({theme, status}) =>
    status === StoryStatus.ACTIVE
      ? theme.COLORS.ORANGE_STATUS
      : status === StoryStatus.COMPLETED
      ? theme.COLORS.GREEN_STATUS
      : theme.COLORS.DARK_SECONDARY_ACTIVE};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  gap: 20px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 10px;
`;
