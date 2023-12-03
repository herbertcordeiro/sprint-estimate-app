import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border: 2px solid ${({theme}) => theme.COLORS.SECONDARY_GRAY};
  border-radius: 6px;
  color: ${({theme}) => theme.COLORS.DARK_PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.LIGHT};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({theme}) => theme.COLORS.SECONDARY_GRAY};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 240px;
  padding: 14px;
  font-size: 16px;
  border: 2px solid ${({theme}) => theme.COLORS.SECONDARY_GRAY};
  border-radius: 6px;
  color: ${({theme}) => theme.COLORS.DARK_PRIMARY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.LIGHT};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({theme}) => theme.COLORS.SECONDARY_GRAY};
  }
`;

export const Label = styled.text`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.GRAY_ACTIVE};
  font-family: ${({theme}) => theme.FONTS.REGULAR};
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
