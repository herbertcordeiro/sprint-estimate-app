import React from 'react';

import {useTranslation} from 'react-i18next';

import {Container, CustomLink, Details, Text} from './styles';

const Footer: React.FC = () => {
  const [t] = useTranslation();

  return (
    <Container>
      <Details>
        <Text>{t('copyright')}</Text>
      </Details>
      <Details>
        <CustomLink to={'#'}>
          <Text>{t('privacy-policy')}</Text>
        </CustomLink>
        <CustomLink to={'#'}>
          <Text>{t('terms-and-conditions')}</Text>
        </CustomLink>
      </Details>
    </Container>
  );
};

export {Footer};
