import React from 'react';

import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {Container, Details, Text} from './styles';

const Footer: React.FC = () => {
  const [t] = useTranslation();

  return (
    <Container>
      <Details>
        <Text>{t('copyright')}</Text>
      </Details>
      <Details>
        <Link style={{textDecoration: 'none'}} to={'/'}>
          <Text>{t('privacy-policy')}</Text>
        </Link>
        <Link style={{textDecoration: 'none'}} to={'/'}>
          <Text>{t('terms-and-conditions')}</Text>
        </Link>
      </Details>
    </Container>
  );
};

export {Footer};
