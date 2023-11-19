import React from 'react';

import {Link} from 'react-router-dom';

import Logo from 'assets/images/sprintestimate.svg';
import {Container} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link style={{textDecoration: 'none'}} to={'/'}>
        <img src={Logo} height={50} />
      </Link>
    </Container>
  );
};

export {Header};
